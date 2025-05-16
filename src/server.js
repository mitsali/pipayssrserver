import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { renderPage } from 'vike/server';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// Middleware
app.set('trust proxy', 1);
app.use(helmet());
app.use(compression());

// Static files
app.use(express.static(path.join(__dirname, '../dist/client'), {
  maxAge: isProduction ? '1y' : 0
}));

// Vike SSR handler
app.use(async (req, res) => {
  try {
    const pageContext = await renderPage({ 
      urlOriginal: req.originalUrl,
      userAgent: req.headers['user-agent']
    });
    
    if (!pageContext?.httpResponse) {
      return res.status(404).send('Not Found');
    }

    const { statusCode, headers, body } = pageContext.httpResponse;
    headers?.forEach(([name, value]) => res.setHeader(name, value));
    res.status(statusCode).send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send(isProduction ? 'Server Error' : error.stack);
  }
});

// Vercel requires this export
export default app;
