import styled from "styled-components";
export const MenuList = styled.div`
  padding: 18px 0 10px 0;
  list-style-type: none;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;
export const MenuLink = styled.a`
  color: #ffffff;
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
  transform: ${(props) =>
    props.active ? "transform: translateX(0)" : "translateX(-500%)"};
  transition: all 0.2s;
`;