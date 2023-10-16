import React from "react";
import "../App.css";
import "../style.css";
import "../Header.css";
import "../Center.css";
import "../Footer.css";
import SkeletonNavigation from "./SkeletonNavigation";
import SkeletonCenterBlock from "./SkeletonCenterBlock";
import SkeletonMainSideBar from "./SkeletonMainSideBar";
import SkeletonBar from "./SkeletonBar";
import SkeletonFooter from "./SkeletonFooter";
function Skeleton() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <SkeletonNavigation />
          <SkeletonCenterBlock />
          <SkeletonMainSideBar />
        </main>
        <SkeletonBar />
        <SkeletonFooter />
      </div>
    </div>
  );
}
export default Skeleton;
