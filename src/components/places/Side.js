import React, { Suspense } from 'react'
import {useParams} from 'react-router-dom'
import {db} from '../../util/firebase'
import Isloading from '../Isloading'
const Place = React.lazy(() => import ('./Place'))

function Side() {
  const {sideId} = useParams()
  const [place, setPlace] = React.useState([])

	React.useEffect(() => {
    db.collection('sides').doc(sideId).collection('places').onSnapshot(snapshot => {
      setPlace(snapshot.docs.map(doc => ({
        id: doc.id,
        place: doc.data()
    })))})},[sideId])
  return (
    <div className="places-row">
      {
        place?.map(item => {
          if(sideId){
            return(
              <Suspense fallback={<Isloading/>}>
                <Place placeName={item.place.placeName} placeInfo={item.place.placeInfo} placeHero={item.place.placeHero} placeId={item.id} sideId={sideId} />
              </Suspense>
            )
          }
        })
      }
    </div>
  )
}
export default Side
