import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const MenuList = styled.div`
  padding: 18px 0 10px 0;
  list-style-type: none;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;
export const MenuLink = styled(NavLink)`
  // color: white;
  color: ${(props) => props.theme.color};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const NavMenu = styled.div`
  position: fixed;
  width: 244px;
  height: 1002px;
  display: block;
  visibility: visible;
`;
