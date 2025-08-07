import { lazy, Suspense } from 'react';

// Lazy loading wrapper component
const LazyWrapper = ({ children, fallback = <div className="loading">Loading...</div> }) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Lazy load heavy components
export const LazyProjectSection = lazy(() => import('./ProjectSection'));
export const LazySkills = lazy(() => import('./Skills'));
export const LazyContact = lazy(() => import('./Contact'));
export const LazyAdminLogin = lazy(() => import('./AdminLogin'));
export const LazyAdminComments = lazy(() => import('./AdminComments'));
export const LazyAdminMessages = lazy(() => import('./AdminMessages'));

export default LazyWrapper;
