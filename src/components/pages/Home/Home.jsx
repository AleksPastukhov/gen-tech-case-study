import { useEffect, useState } from 'react';
import { getCourses } from '../../services/coursesApi';
import { СoursesList } from '../../СoursesList/СoursesList';
import { SectionTitle } from './Home.styled';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <SectionTitle>Courses</SectionTitle>
      <СoursesList courses={courses} />
    </>
  );
};

export default Home;
