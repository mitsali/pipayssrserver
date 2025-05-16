// src/pages/_error/+Page.tsx

function Page(pageContext: any) {
  if (typeof window !== 'undefined') {
    // Log pageContext to browser console for debugging
    console.error('Error pageContext:', pageContext);
  }
  const abortReason = pageContext?.abortReason || 'Unknown error'

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Error: 404</h1>
      <p>Something went wrong: {abortReason}</p>
    </div>
  )
}

export default Page;