import React from 'react';
import '../../styles/map.css';
import {db} from '../../util/firebase'
import RelatedPlace from './RelatedPlace';
import {useParams} from 'react-router-dom'

export default function Location() {
  const [place, setPlace] = React.useState([])
  const {sideId} = useParams()
  React.useEffect(() => {
    db.collection('sides').doc(sideId).collection("places").onSnapshot(snapshot => {
      setPlace(snapshot.docs.map(doc => ({
        id: doc.id,
        place: doc.data()
    })))})},[])

  return (
        <div className="map-places-area-sidebar">
          <div className="sidebav-header">
            <h4>ადგილები</h4>
          </div>
          <div className="places-row-grid">
            {
              place?.map(({place, id}) => (<RelatedPlace placeHero={place.placeHero} city={place.placeName} key={id} sideId={sideId}  mapId={id}/>))
            }
        </div>
    </div>
  )
}