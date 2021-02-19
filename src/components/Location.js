import React from "react";
import "../styles/map.css";
import { db } from "../util/firebase";
import "mapbox-gl/dist/mapbox-gl.css";
import PlacesRow from "./related/PlacesRow";
import MapBox from "./related/MapBox";
import {useParams} from 'react-router-dom'

export default function Location() {
  const [place, setPlace] = React.useState([]);
  const {sideId} = useParams()

  React.useEffect(() => {
    db.collection("sides").doc(sideId).collection("places").onSnapshot((snapshot) => {
      setPlace(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          place: doc.data(),
        }))
      );
    });
  }, []);
  console.log(typeof place)

  return (
    <div className="map-places">
      <div className="map-places-area">
        <PlacesRow />
        {place.length !== 0 ? <MapBox place={place}></MapBox> : ("")}
      </div>
    </div>
  );
}
