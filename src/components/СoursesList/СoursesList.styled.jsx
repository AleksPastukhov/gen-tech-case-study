import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CourseTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 5px;
  font-size: 16px;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
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

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primaryTextColor};
  text-decoration: none;
`;

export const CourseCard = styled.div`
  width: 500px;
  background-color: ${p => p.theme.colors.backgroundColor};

  img {
    width: 500px;
    height: 250px;
  }
`;

export const DescriptionBox = styled.div`
  padding: 10px;
`;
