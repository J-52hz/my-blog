import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const Home = lazy(() => import('../views/home'));
const Blog = lazy(() => import('../views/blog'));
const Posts = lazy(() => import('../views/posts'));

const suspenseComp = (comp: JSX.Element) => {
  return <React.Suspense fallback={<div>loading</div>}>{comp}</React.Suspense>;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: suspenseComp(<Home />)
  },
  {
    path: '/blog',
    element: suspenseComp(<Blog />)
  },
  {
    path: '/posts/:ll_titleEng',
    element: suspenseComp(<Posts />)
  }
];

export default routes;
