import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CourseTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 20px 5px;
  font-size: 32px;
`;

export const LessonTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 5px;
  font-size: 16px;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0 0 20px 0;
`;

export const Card = styled.li`
  border-radius: 10px;
  overflow: hidden;
  transition: transform ${p => p.theme.transition},
    box-shadow ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.04);
    box-shadow: ${p => p.theme.boxShadow};
  }
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

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primaryTextColor};
  text-decoration: none;
`;

export const CourseCard = styled.div`
  width: 500px;
  height: 315px;
  background-color: ${p => p.theme.colors.backgroundColor};

  img {
    width: 500px;
    height: 250px;
  }
`;
