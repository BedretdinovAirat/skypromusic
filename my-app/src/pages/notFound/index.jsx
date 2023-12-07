import Navigation from "../../components/Navigation";
import * as S from "../../styledComponents/StyledApp";
import Bar from "../../components/Bar";
import Footer from "../../components/Footer";
import "../../App.css";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <div className="notFound">
            <Navigation />
            <div className="notFound__content">
              <h1 className="notFound__title">404</h1>
              <p className="notFound__subtitle">Страница не найдена</p>
              <img
                className="notFound__image"
                src="img/crying.svg"
                alt="sad"
              ></img>
              <p className="notFound__text">
                Возможно, она была удалена или перенесена на другой адреc
              </p>
              <button className="notFound__button">
                <use className="notFound__link">Вернуться на главную</use>;
              </button>
            </div>
          </div>
        </S.Main>
        <Bar />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
//
