import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCoursById } from '../../services/coursesApi';
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

  const id = location.state.from.pathname.split('/')[2];

  useEffect(() => {
    getCoursById(id)
      .then(data => {
        const lessonInfo = data.lessons.filter(
          lesson => lesson.id === lessonId
        );
        setLessonData(...lessonInfo);
      })
      .catch(err => console.log(err));
  }, [id, lessonId]);

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
    </>
  );
};

export default Lesson;
