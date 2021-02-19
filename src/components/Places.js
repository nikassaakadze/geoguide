import React, {useEffect, useState} from 'react'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import '../styles/Places.css'
import {db} from '../util/firebase'
import PlaceItem from './PlaceItem'
import {Link} from 'react-router-dom'

function Places() {

	const [place, setPlace] = useState([])
	const [related, setrelated] = React.useState("8QtW79PzbwktKqQcNWI9")
	React.useEffect(() => {
		db.collection('sides').doc(related).collection('places').onSnapshot(snapshot => {
		  setPlace(snapshot.docs.map(doc => ({
			id: doc.id,
			place: doc.data()
		})))})
	},[])
	return (
  <section className="popularPlaces">
    <div className="popularPlaces-inner">
      <div className="popularPlaces-inner-headline">
        <h2>პოპულარული ადგილები</h2>
		<Link to="/places/8QtW79PzbwktKqQcNWI9/გურია">
		<div className="morePlaces">
			<span>მეტის ნახვა</span>
			<KeyboardArrowRightOutlinedIcon className="brdc" />
		</div>
		</Link>
      </div>
      <div className="popularPlaces-inner-grid">
      {
      	place?.slice(0, 4).map(item => (
      		<PlaceItem cover={item.place.placeHero} name={item.place.placeName} description={item.place.placeInfo} placeId={item.id} sideId = {related} />
      	))
      }
      </div>
    </div>
  </section>
	)
}

export default Places