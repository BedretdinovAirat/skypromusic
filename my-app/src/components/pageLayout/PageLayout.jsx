import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import * as S from "../../styledComponents/StyledApp.jsx";
import { useThemeContext } from "../../pages/ThemeContext/ThemeContext";
import Bar from "../Bar";
const PageLayout = () => {
  const { theme } = useThemeContext();
  const changeTrack = useSelector((state) => state.track.changeTrack);
  return (
    <S.Wrapper>
      <S.Container theme={theme}>
        <Outlet />
        {changeTrack ? <Bar /> : null}
      </S.Container>
    </S.Wrapper>
  );
};
export { PageLayout };
