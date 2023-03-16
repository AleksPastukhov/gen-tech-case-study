import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import {
  LessonTitle,
  Wrapper,
  CourseInfo,
  InfoBox,
  SubTitle,
  Description,
} from './Lesson.styled';

const Lesson = () => {
  const location = useLocation();
  const { lessonId } = useParams();
  const [lessonData, setLessonData] = useState(null);

  console.log(
    ...location.state.courseData.lessons.filter(
      lesson => lesson.id === lessonId
    )
  );

  useEffect(() => {
    setLessonData(
      ...location.state.courseData.lessons.filter(
        lesson => lesson.id === lessonId
      )
    );
  }, [lessonId, location]);

  if (!lessonData) {
    return <h2>Loading...</h2>;
  }

  const { title, previewImageLink } = lessonData;

  return (
    <>
      <LessonTitle>{title}</LessonTitle>
      <Wrapper>
        <Wrapper>
          <CourseInfo>
            <img
              src={`${previewImageLink}.wedp`}
              alt={`Poster`}
              width="300px"
              height="440px"
            />
            <InfoBox>
              <div>
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
    </>
  );
};

export default Lesson;
