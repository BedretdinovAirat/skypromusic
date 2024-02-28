import "../../style.css";
import * as S from "../../styledComponents/StyledApp";
import * as Style from "../../styledComponents/StyledCenterBlock";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useThemeContext } from "../ThemeContext/ThemeContext";
import { useGetCategoryQuery } from "../../components/redux/ApiMusic";
import Track from "../../components/Track";

export const Categories = () => {
  const { theme } = useThemeContext();

  const params = useParams();
  const { data, isLoading, error } = useGetCategoryQuery({ id: params.id });
  return (
    <S.Wrapper theme={theme}>
      <S.Container>
        <S.Main>
          <Navigation />
          <S.Container>{data?.name}</S.Container>
          <Style.MainCenterblock>
            <Style.CenterBlockH2 theme={theme}>
              Мой плейлист
            </Style.CenterBlockH2>
            <Style.CenterblockContent>
              <Style.ContentTitle>
                <Style.PlaylistTitleCol>Трек</Style.PlaylistTitleCol>
                <Style.PlaylistTitleCol>ИСПОЛНИТЕЛЬ</Style.PlaylistTitleCol>
                <Style.PlaylistTitleCol>АЛЬБОМ</Style.PlaylistTitleCol>
                <Style.PlaylistTitleCol>
                  <Style.PlaylistTitleSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </Style.PlaylistTitleSVG>
                </Style.PlaylistTitleCol>
              </Style.ContentTitle>
              <Style.ContentPlaylist>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton
                      width={1080}
                      height={20}
                      count={29}
                      style={{ marginBottom: "25px" }}
                    />
                  </SkeletonTheme>
                ) : (
                  data?.items?.map((track) => (
                    <Track
                      data={data}
                      track={track}
                      // track={track}
                      // name={track.name}
                      // author={track.author}
                      // album={track.album}
                      // duration_in_seconds={track.duration_in_seconds}
                      // setChangeTrack={setChangeTrack}
                      key={track.id}
                      // track_file={track.track_file}
                      isFavoriteLike={true}
                      {...track}
                    />
                  ))
                )}
              </Style.ContentPlaylist>
            </Style.CenterblockContent>
          </Style.MainCenterblock>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
