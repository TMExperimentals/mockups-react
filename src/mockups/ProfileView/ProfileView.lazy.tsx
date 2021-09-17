import React, { lazy, Suspense } from 'react';

const LazyProfileView = lazy(() => import('./ProfileView'));

const ProfileView = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProfileView {...props} />
  </Suspense>
);

export default ProfileView;
