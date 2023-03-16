import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import {
  GoBack,
  LessonTitle,
  Wrapper,
  CourseInfo,
  InfoBox,
  SubTitle,
  Description,
} from './Lesson.styled';
import { ReactComponent as Arrow } from '../../../images/arrow_back.svg';

const Lesson = () => {
  const location = useLocation();
  const { lessonId } = useParams();
  const [lessonData, setLessonData] = useState(null);
  const backLinkHref = location?.state?.from ?? '/';

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
      <GoBack type="button" to={backLinkHref}>
        <Arrow /> GO BACK
      </GoBack>
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
