import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { getTrendsCourses, getToken } from './services/coursesApi';

const Home = lazy(() => import('./pages/Home/Home'));
const Lesson = lazy(() => import('./pages/Lesson/Lesson'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

getToken().then(console.log);

getTrendsCourses()
  .then(console.log)
  .catch(error => console.log);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Lesson />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />;
    </>
  );
};
