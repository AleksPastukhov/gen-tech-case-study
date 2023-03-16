import { useEffect, useState } from 'react';
import { getCourses } from '../../services/coursesApi';
import { СoursesList } from '../../СoursesList/СoursesList';
import { Container, Title } from './Home.styled';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(err => console.log(err));
  }, []);

  if (courses.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Title>Trend courses</Title>
      <СoursesList courses={courses} />
    </Container>
  );
};

export default Home;
