import React, { useState, useEffect } from "react";
import "../../styles/map.css";
import { Marker, Popup } from "react-mapbox-gl";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import placeholder from "../../icons/marker2.png";
import { useParams } from "react-router-dom";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYm9tdGFrYXRhIiwiYSI6ImNrNmt6ZmJvMzA4ejAzcnA2Y2N6aGdkdGgifQ.5itrZsf_kX9Rnw4kSep5ZQ",
});

function MapBox({ place }) {
  // props
  const { placeId } = useParams();
  // States
  const [location, setLocation] = useState([44.82646, 41.69951]);
  const [showPopup, setShowPopup] = useState({
    show: false,
  });
  const [placeCrumb, setPlaceCrumb] = useState("")

  useEffect(() => {
    const found = place.find((element) =>
      element.id === placeId ? element : ""
    );

    if (found) {
      setShowPopup({
        ...found.place,
        show: true,
      });
      setLocation([found.place.longit, found.place.latit,]);
      setPlaceCrumb(found.place.placeName)
    }
  }, [placeId]);

  return (
    <div className="map-area">
    <div className="map__locations">
      <div className="myLocation">
        <div className="locIcon">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#53AB39"/>
        <path d="M19.1973 10.1476C19.6394 10.0603 19.9623 10.5566 19.7034 10.9254L13.597 19.6236C13.328 20.0068 12.7271 19.8433 12.6894 19.3767L12.37 15.4269C12.3564 15.2586 12.2588 15.1086 12.1104 15.0279L8.62887 13.1355C8.21757 12.9119 8.31155 12.2963 8.77083 12.2056L19.1973 10.1476Z" fill="white"/>
        </svg>
        </div>
        <span>ჩემი მისამართი</span>
      </div>
      <div className="myLocation">
        <div className="locIcon">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#0057FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 19V28H11V19H9Z" fill="#0057FF"/>
</svg>
        </div>
        <span>{placeCrumb}</span>
      </div>
    </div>
      <Map
        style="mapbox://styles/mapbox/satellite-v9"
        containerStyle={{
          height: "100vh",
          width: "70%",
          marginLeft: "30%",
          marginTop: "0px",
        }}
        zoom={[15]}
        center={location}
      >
        {place.map((item) => {
          return (
            <Marker
              coordinates={[showPopup.longit, showPopup.latit]}
              anchor="bottom"
            >
              <img src={placeholder} width="50" alt={"logo"} />
            </Marker>
          );
        })}
        {showPopup.show && (
          <Popup
            coordinates={[showPopup.longit, showPopup.latit]}
            offset={{
              "bottom-left": [17, -38],
              bottom: [0, -38],
              "bottom-right": [-12, -38],
            }}
          >
            <div className="place-description-inner">
              <div className="place-hero">
                <img src={showPopup.placeHero} alt="sameba" />
              </div>
              <div className="place-name">
                <h4>{showPopup.placeName}</h4>
              </div>
              <div className="place-info">
                <p>{showPopup.placeInfo}</p>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapBox;
