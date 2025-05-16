// src/renderer/+onRenderHtml.jsx
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { StaticRouter } from 'react-router-dom/server'
import PageLayout from './PageLayout'
import { PageContextProvider } from 'vike-react/usePageContext'

async function onRenderHtml(pageContext) {
  let { Page, pageProps } = pageContext
  Page = Page?.default || Page

  if (!Page || typeof Page !== 'function') {
    throw new Error('Page component is invalid in pageContext. Check your export.')
  }

  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={pageContext.urlOriginal}>
      <PageContextProvider pageContext={pageContext}>
        <PageLayout>
          <Page {...pageProps} />
        </PageLayout>
      </PageContextProvider>
    </StaticRouter>
  )

  const title =
    (typeof pageContext.config?.title === 'function'
      ? await pageContext.config.title(pageContext)
      : pageContext.config?.title) || 'Default Title'

  const description =
    (typeof pageContext.config?.description === 'function'
      ? await pageContext.config.description(pageContext)
      : pageContext.config?.description) || 'Default Description'

  const documentHtml = escapeInject`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
  `

  return {
    documentHtml
  }
}

export default onRenderHtml
