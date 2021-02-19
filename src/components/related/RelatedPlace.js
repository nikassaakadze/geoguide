import React from 'react'
import {Link} from 'react-router-dom'

function RelatedPlace({placeHero, city, mapId, sideId}) {
  return (
        <div className="place-for-map">
        <div className="place-for-map-hero">
          <img src={placeHero} alt="" />
        </div>
        <div className="place-for-map-footer">
          <span> {city} </span>
          <Link className="see-place-btn" to={`/map/${mapId}/${sideId}`}>სრულად ნახვა</Link>
        </div>
      </div>
  )
}

export default RelatedPlace
// onClick={changePlace} className="see-place-btn" to={`/map/${id}`}