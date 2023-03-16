import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { getCourses, getCoursById } from './services/coursesApi';

const Home = lazy(() => import('./pages/Home/Home'));
const Lesson = lazy(() => import('./pages/Lesson/Lesson'));
const LessonsList = lazy(() => import('./pages/LessonsList/LessonsList'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

getCourses()
  .then(console.log)
  .catch(error => console.log);

getCoursById()
  .then(console.log)
  .catch(error => console.log);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="course/:id" element={<LessonsList />} />
          <Route path="lesson/:lessonId" element={<Lesson />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />;
    </>
  );
};
