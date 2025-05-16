// src/server.js
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { renderPage } from 'vike/server';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

// Create Express app
const app = express();

// Trust proxy if behind a reverse proxy (e.g., Nginx, Heroku, etc.)
app.set('trust proxy', 1);

// Security headers - simplified for now
app.use(helmet());

// Enable compression
app.use(compression());

// Serve static files from dist/client
app.use(express.static(path.join(__dirname, '../dist/client'), {
  maxAge: isProduction ? '1y' : 0,
  etag: true,
  lastModified: true,
  index: false
}));

// Handle all HTTP methods with Vike
app.use(async (req, res, next) => {
  try {
    const url = req.originalUrl || req.url || '/';
    const method = req.method.toUpperCase();
    
    console.log(`[${method}] Processing request for URL: ${url}`);
    
    // Only handle GET requests with Vike
    if (method !== 'GET') {
      console.log(`Method ${method} not handled by Vike, skipping...`);
      return next();
    }
    
    const pageContext = await renderPage({ 
      urlOriginal: url,
      // Add any additional context needed by your app
      userAgent: req.headers['user-agent']
    });
    
    if (!pageContext?.httpResponse) {
      console.log('No HTTP response from Vike for URL:', url);
      return res.status(404).send('Page not found');
    }

    const { statusCode, headers, body } = pageContext.httpResponse;
    
    // Set response headers
    if (headers && Array.isArray(headers)) {
      for (const [name, value] of headers) {
        if (name && value !== undefined) {
          res.setHeader(String(name), String(value));
        }
      }
    }
    
    // Send the response
    res.status(statusCode || 200).send(body || '');
    
  } catch (error) {
    console.error('Server error:', error);
    if (!res.headersSent) {
      res.status(500).send(isProduction ? 'Internal Server Error' : error.stack);
    }
  }
});

// 404 handler - only gets here if no route handled the request
app.use((req, res) => {
  res.status(404).send(
    isProduction 
      ? 'Page not found' 
      : `Page not found: ${req.method} ${req.originalUrl}`
  );
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error('Error processing request:', {
    url: req.originalUrl,
    method: req.method,
    error: err.stack || err.message || err
  });
  
  if (res.headersSent) {
    return next(err);
  }
  
  res.status(500).json({
    error: isProduction ? 'Internal Server Error' : err.message,
    ...(isProduction ? {} : { stack: err.stack })
  });
});

// Create HTTP server
const server = createServer(app);

// Start server
server.listen(port, '0.0.0.0', () => {
  console.log('='.repeat(60));
  console.log(`Server running in ${isProduction ? 'production' : 'development'} mode`);
  console.log(`Server listening on http://localhost:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('='.repeat(60));
});

// Handle server errors
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // In production, you might want to log this to an error tracking service
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // In production, you might want to log this to an error tracking service
  // Consider whether to exit the process in production
  if (isProduction) {
    process.exit(1);
  }
});

export { app };