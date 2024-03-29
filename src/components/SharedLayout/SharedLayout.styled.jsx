import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const SectionTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 32px;
`;

export const NavItem = styled(NavLink)`
  position: absolute;
  left: 20px;
  top: 23px;
  padding: 4px;
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid ${p => p.theme.colors.primaryTextColor};
  border-radius: 5px;
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.accentСolor};
    border: 1px solid ${p => p.theme.colors.accentСolor};
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
  box-shadow: ${p => p.theme.boxShadow};
  padding: 20px 20px;
  background-color: ${p => p.theme.colors.backgroundColor};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  color: ${p => p.theme.colors.primaryTextColor};
`;
