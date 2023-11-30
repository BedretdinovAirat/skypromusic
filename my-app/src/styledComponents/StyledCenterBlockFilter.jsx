import styled from "styled-components";
export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const FilterButton = styled.div`
  color: white;
  &:hover {
    cursor: pointer;
    border-color: #d9b6ff;
    color: #d9b6ff;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const MenuItem = styled.li`
  list-style-type: none;
  &:hover {
    color: #d9b6ff;
  }
  display: flex;
  align-items: center;
  padding: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  color: white;
  padding: 5px 0;
  margin-bottom: 16px;
`;
export const MenuFilter = styled.div`
  position: absolute;
  top: calc(100% - -10px);
  left: 35px;
  width: 250px;
  padding: 25px;
  background-color: #272727;
  border: 1px solid #d9b6ff;
  border-radius: 10px;
  height: 250px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #272727;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black; /* цвет бегунка */
    border-radius: 10px; /* округлось бегунка */
    border: 1px solid black;
  }
  &:before,
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 25px;
    border: 10px solid transparent;
  }
  &:before {
    top: -20px;
    border-bottom: 10px solid #d9b6ff;
  }
  &:after {
    top: -19px;
    border-bottom: 10px solid #272727;
  }
`;
export const NavMenu = styled.div`
  position: fixed;
  width: 244px;
  height: 1002px;
  display: block;
  visibility: visible;
`;
