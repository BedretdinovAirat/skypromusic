import "./App.css";
import "./style.css";
import "./Header.css";
import "./Center.css";
import "./Footer.css";
// import Navigation from "./components/Navigation";
// import CenterBlock from "./components/CenterBlock";
// import MainSideBar from "./components/MainSideBar";
// import Bar from "./components/Bar";
// import Footer from "./components/Footer";
import React from "react";
// import * as S from "./styledComponents/StyledApp";
import { AppRoutes } from "./routes";
import { getTracks } from "./api/Api";
function App() {
  const [tracks, setTracks] = React.useState([
    {
      id: 1,
      name: "Guilty",
      author: "Nero",
      album: "Welcome Reality",
      isLike: false,
      time: "4:44",
    },
    {
      id: 2,
      name: "Elektro",
      author: "Dynoro, Outwork, Mr. Gee",
      album: "Elektro",
      isLike: true,
      time: "2:22",
    },
    {
      id: 3,
      name: `I'm Fire`,
      author: "Ali Bakgor",
      album: "I’m Fire",
      isLike: false,
      time: "2:22",
    },
    {
      id: 4,
      name: "Non Stop",
      author: "Стоункат, Psychopath",
      album: "Non Stop",
      isLike: false,
      time: "4:12",
    },
    {
      id: 5,
      name: "Run Run",
      author: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      isLike: false,
      time: "2:54",
    },
    {
      id: 6,
      name: "Eyes on Fire",
      author: "Blue Foundation, Zeds Dead ",
      album: "Eyes on Fire",
      isLike: false,
      time: "5:20",
    },
    {
      id: 7,
      name: "Mucho Bien",
      author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
      album: "Mucho Bien",
      isLike: false,
      time: "3:41",
    },
    {
      id: 8,
      name: "Knives n Cherries",
      author: "minthaze",
      album: "Captivating",
      isLike: false,
      time: "1:48",
    },
    {
      id: 9,
      name: "How Deep Is Your Love",
      author: "Calvin Harris, Disciples",
      album: "How Deep Is Your Love",
      isLike: false,
      time: "3:32",
    },
    {
      id: 10,
      name: "Morena",
      author: "Tom Boxer",
      album: "Soundz Made in Romania",
      isLike: false,
      time: "4:44",
    },
  ]);
  React.useEffect(() => {
    getTracks().then((track) => {
      console.log("1", track);
      setTracks(track);
    });
  }, []);
  return (
    <AppRoutes tracks={tracks} setTracks={setTracks} />
    // <S.Wrapper>
    //   <S.Container>
    //     <S.Main>
    //       <Navigation />
    //       <CenterBlock />
    //       <MainSideBar />
    //     </S.Main>
    //     <Bar />
    //     <Footer />
    //   </S.Container>
    // </S.Wrapper>
  );
}

export default App;
