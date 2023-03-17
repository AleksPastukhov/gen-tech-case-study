import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
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

export const GoBack = styled(NavLink)`
  position: absolute;
  top: 115px;
  left: 20px;
  margin-top: 10px;
  width: 120px;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(21 / 18);
  color: ${p => p.theme.colors.primaryTextColor};
  fill: ${p => p.theme.colors.primaryTextColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.accentСolor};
    border: 1px solid ${p => p.theme.colors.accentСolor};
    fill: ${p => p.theme.colors.accentСolor};
    transform: scale(1.04);
  }
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
