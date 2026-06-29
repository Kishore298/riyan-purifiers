import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Fire Meta Pixel PageView on route change
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    if (hash) {
      // Small timeout to ensure the element is rendered, especially when navigating from another page to home
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Reset to top immediately
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
