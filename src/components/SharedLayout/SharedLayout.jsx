import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  NavItem,
  Wrapper,
  Nav,
  List,
  SectionTitle,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();

  const getTitle = location => {
    if (location.pathname.split('/').includes('course')) {
      return 'Course';
    } else if (location.pathname.split('/').includes('lesson')) {
      return 'lesson';
    } else {
      return 'Courses';
    }
  };

  return (
    <Wrapper>
      <Nav>
        <List>
          <li>
            <NavItem to="/">Courses</NavItem>
          </li>
        </List>
        <SectionTitle>{getTitle(location)}</SectionTitle>
      </Nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
