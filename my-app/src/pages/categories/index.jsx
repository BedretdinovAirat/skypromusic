import "../../style.css";
import * as S from "../../styledComponents/StyledApp";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useThemeContext } from "../ThemeContext/ThemeContext";
export const Categories = () => {
  const { theme } = useThemeContext();

  const params = useParams();
  const categories = [
    {
      id: 1,
      title: "Плейлист дня",
    },
    {
      id: 2,
      title: "100 хитов",
    },
    {
      id: 3,
      title: "Инди заряд",
    },
  ];
  const category = categories.find((item) => item.id === Number(params.id));
  return (
    <S.Wrapper theme={theme}>
      <S.Container>
        <S.Main>
          <Navigation />
          <S.Container>{category.title}</S.Container>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
