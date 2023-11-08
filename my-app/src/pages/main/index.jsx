import "../../style.css";
import Navigation from "../../components/Navigation";
import CenterBlock from "../../components/CenterBlock";
import MainSideBar from "../../components/MainSideBar";
import * as S from "../../styledComponents/StyledApp";
import Bar from "../../components/Bar";
import Footer from "../../components/Footer";

export const Main = ({ user, logOut }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation user={user} logOut={logOut} />
          <CenterBlock />
          <MainSideBar user={user} logOut={logOut} />
        </S.Main>
        <Bar />
        <Footer />
      </S.Container>
    </S.Wrapper>
    // <S.Main>
    //   <Navigation />
    //   <CenterBlock />
    //   <MainSideBar />
    // </S.Main>
  );
};
