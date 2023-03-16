import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 95%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: ${p => p.theme.boxShadow};
`;

export const LessonTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 20px 5px;
  font-size: 32px;
`;

export const SubTitle = styled.h2`
  margin-bottom: 20px;
`;
export const Description = styled.p`
  margin-bottom: 20px;
`;

export const CourseInfo = styled.div`
  height: 440px;
  display: flex;
  img {
    border-radius: 10px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
