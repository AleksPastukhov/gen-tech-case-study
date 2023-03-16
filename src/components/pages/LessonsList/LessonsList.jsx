import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCoursById } from '../../services/coursesApi';
import {
  HomeList,
  Link,
  CourseCard,
  CourseTitle,
  LessonTitle,
  Card,
} from './LessonsList.styled';
import defaultImg from '../../../images/no-poster.jpeg';

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
    <>
      <CourseTitle>{courseData.title}</CourseTitle>
      <HomeList>
        {courseData.lessons.map(({ id, title, previewImageLink, status }) => (
          <Card key={id}>
            <Link to={`/lesson/${id}`} state={{ from: location, courseData }}>
              <CourseCard>
                <LessonTitle>{title}</LessonTitle>
                <p>{status}</p>
                <img
                  src={
                    previewImageLink
                      ? `https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.webp`
                      : defaultImg
                  }
                  alt={`Poster ${title}`}
                  width="500px"
                  height="250px"
                />
              </CourseCard>
            </Link>
          </Card>
        ))}
      </HomeList>
    </>
  );
};

export default LessonsList;
