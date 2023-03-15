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

  const { title, previewImageLink } = courseData;
  return (
    <Wrapper>
      <Wrapper>
        <CourseInfo>
          <img
            src={previewImageLink}
            alt={`Poster ${title}`}
            width="300px"
            height="440px"
          />
          <InfoBox>
            <div>
              <CourseTitle> {title}</CourseTitle>
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
