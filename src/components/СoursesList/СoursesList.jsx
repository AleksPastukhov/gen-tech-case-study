import { useLocation } from 'react-router-dom';
import {
  HomeList,
  Link,
  CourseCard,
  CourseTitle,
  Card,
  DescriptionBox,
} from './СoursesList.styled';

export const СoursesList = ({ courses }) => {
  const location = useLocation();

  if (courses.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <HomeList>
      {courses.map(
        ({
          id,
          title,
          previewImageLink,
          description,
          meta: { skills },
          rating,
          lessonsCount,
        }) => (
          <Card key={id}>
            <Link to={`/course/${id}`} state={{ from: location }}>
              <CourseCard>
                <CourseTitle>{title}</CourseTitle>
                <img
                  src={`${previewImageLink}/cover.webp`}
                  alt={`Poster ${title}`}
                  width="500px"
                  height="250px"
                />
                <DescriptionBox>
                  <p>{description}</p>
                  <h3>Skills</h3>
                  <ul>
                    {skills
                      ? skills.map(skil => <li key={skil}>{skil}</li>)
                      : 'no genre'}
                  </ul>
                  <h3>Rating</h3>
                  <p>{rating}</p>
                  <h3>Lessons Count</h3>
                  <p>{lessonsCount}</p>
                </DescriptionBox>
              </CourseCard>
            </Link>
          </Card>
        )
      )}
    </HomeList>
  );
};
