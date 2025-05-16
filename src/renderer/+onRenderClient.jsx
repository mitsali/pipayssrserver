// src/renderer/+onRenderClient.jsx
import 'react-overlays'
import 'dom-helpers'
export { onRenderClient }

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageContextProvider } from 'vike-react/usePageContext'
import PageLayout from './PageLayout'

async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext

  createRoot(document.getElementById('page-view')).render(
    <BrowserRouter>
      <PageContextProvider pageContext={pageContext}>
        <PageLayout>
          <Page {...pageProps} />
        </PageLayout>
      </PageContextProvider>
    </BrowserRouter>
  )
}
