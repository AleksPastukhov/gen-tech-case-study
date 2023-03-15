import { useLocation } from 'react-router-dom';
import {
  HomeList,
  Link,
  CourseCard,
  CourseTitle,
  Card,
} from './СoursesList.styled';

export const СoursesList = ({ courses }) => {
  const location = useLocation();

  return (
    <HomeList>
      {courses.map(({ id, title, previewImageLink }) => (
        <Card key={id}>
          <Link to={`/${id}`} state={{ from: location }}>
            <CourseCard>
              <img
                src={`${previewImageLink}/cover.webp`}
                alt={`Poster ${title}`}
                width="500px"
                height="250px"
              />
              <CourseTitle>{title}</CourseTitle>
            </CourseCard>
          </Link>
        </Card>
      ))}
    </HomeList>
  );
};
