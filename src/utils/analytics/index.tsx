export const trackPageView = (url: string) => {
    window.gtag('config', 'G-NRRXKJQTK8', {
      page_path: url,
    });
  };