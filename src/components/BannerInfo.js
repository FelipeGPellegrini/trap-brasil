import { useState } from "react";
import "./BannerInfo.css";

const BannerInfo = ({ name, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      id="containerBanner"
      onClick={() => {
        if (showInfo === false) {
          setShowInfo(true);
        } else {
          setShowInfo(false);
        }
      }}
    >
      {!showInfo && (
        <div id="firstScreen">
          <h1>{name}</h1>
        </div>
      )}
      {showInfo && (
        <div id="infoScreen">
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default BannerInfo;
