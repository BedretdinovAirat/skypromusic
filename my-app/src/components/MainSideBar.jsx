import "../style.css";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const StyledMainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;
const StyledSidebarPersonal = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;
const StyledSidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;
const StyledSidebarIcon = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`;
const StyledSidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
const StyledSidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledSidebarItem = styled.div`
  width: 250px;
  height: 150px;
`;
const StyledSidebarLink = styled.a`
  width: 100%;
  height: 100%;
`;
const StyledSidebarImage = styled.img`
  width: 100%;
  height: auto;
`;
// const styled = styled.div``;
function MainSideBar() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <StyledMainSidebar>
      <StyledSidebarPersonal>
        <StyledSidebarPersonalName>Bedretdionv.Airat</StyledSidebarPersonalName>
        <StyledSidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </StyledSidebarIcon>
      </StyledSidebarPersonal>
      <StyledSidebarBlock>
        <StyledSidebarList>
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={150} />
            </SkeletonTheme>
          ) : (
            <StyledSidebarItem>
              <StyledSidebarLink href="!#">
                <StyledSidebarImage
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </StyledSidebarLink>
            </StyledSidebarItem>
          )}
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={150} />
            </SkeletonTheme>
          ) : (
            <StyledSidebarItem>
              <StyledSidebarLink href="!#">
                <StyledSidebarImage
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </StyledSidebarLink>
            </StyledSidebarItem>
          )}
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={150} />
            </SkeletonTheme>
          ) : (
            <StyledSidebarItem>
              <StyledSidebarLink href="!#">
                <StyledSidebarImage
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </StyledSidebarLink>
            </StyledSidebarItem>
          )}
        </StyledSidebarList>
      </StyledSidebarBlock>
    </StyledMainSidebar>
  );
}
export default MainSideBar;
