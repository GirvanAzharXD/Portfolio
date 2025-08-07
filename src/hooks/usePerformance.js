import { useEffect } from 'react';

// Hook for monitoring performance metrics
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      // Web Vitals monitoring
      if ('web-vital' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.log(`${entry.name}: ${entry.value}`);
          });
        });
        
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      }

      // Log bundle loading performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        console.log('Performance Metrics:', {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          load: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
        });
      });
    }
  }, []);
};

// Hook for intersection observer (lazy loading)
export const useIntersectionObserver = (callback, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    return () => observer.disconnect();
  }, [callback, options]);
};
