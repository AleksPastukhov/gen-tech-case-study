import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getCoursById } from '../../services/coursesApi';
import {
  Wrapper,
  CourseInfo,
  InfoBox,
  CourseTitle,
  SubTitle,
  Description,
} from './Lesson.styled';

const Lesson = () => {
  const { lessonId } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    getCoursById(lessonId)
      .then(setCourseData)
      .catch(err => console.log(err));
  }, [lessonId]);

  if (!courseData) {
    return <h2>Loading...</h2>;
  }

  return (
    <Wrapper>
      <Wrapper>
        <CourseInfo>
          <img
            src={`https://wisey.app/assets/images/web/course-covers/lesson-1/cover.webp`}
            alt={`Poster`}
            width="300px"
            height="440px"
          />
          <InfoBox>
            <div>
              <CourseTitle> {}</CourseTitle>
              <Description>
                User Score:
                {'the movie is not popular'}
              </Description>
              <SubTitle>Overview</SubTitle>
              <Description>{}</Description>
              <SubTitle>Geners</SubTitle>
              <Description>{'no genre'}</Description>
            </div>
          </InfoBox>
        </CourseInfo>
      </Wrapper>
      <Wrapper>
        <SubTitle>Additional information</SubTitle>
      </Wrapper>
      <Wrapper>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </Wrapper>
  );
};

export default Lesson;
