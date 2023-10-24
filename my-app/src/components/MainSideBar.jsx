import "../style.css";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styledComponents/StyledMainSideBar";

function MainSideBar() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Bedretdionv.Airat</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={150} />
            </SkeletonTheme>
          ) : (
            <S.SidebarItem>
              <S.SidebarLink href="!#">
                <S.SidebarImage src="img/playlist01.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={150} />
            </SkeletonTheme>
          ) : (
            <S.SidebarItem>
              <S.SidebarLink href="!#">
                <S.SidebarImage src="img/playlist02.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={150} />
            </SkeletonTheme>
          ) : (
            <S.SidebarItem>
              <S.SidebarLink href="!#">
                <S.SidebarImage src="img/playlist03.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default MainSideBar;
