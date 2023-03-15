import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCoursById } from '../../services/coursesApi';
import {
  HomeList,
  Link,
  CourseCard,
  CourseTitle,
  Card,
} from './LessonsList.styled';

const LessonsList = () => {
  const location = useLocation();
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    getCoursById(id)
      .then(setCourseData)
      .catch(err => console.log(err));
  }, [id]);

  if (!courseData) {
    return <h2>Loading...</h2>;
  }

  return (
    <HomeList>
      {courseData.lessons.map(({ id, title, previewImageLink }) => (
        <Card key={id}>
          <Link to={`/lesson/${id}`} state={{ from: location, courseData }}>
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

export default LessonsList;
