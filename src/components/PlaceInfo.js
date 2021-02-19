import React, {useState, useEffect} from 'react'
import '../styles/PlaceInfo.css'
import clock from '../icons/clock.svg'
import alert from '../icons/alert.svg'
import Header from './Header'
import Gallery from './Gallery'
import Places from './Places'
import {db} from '../util/firebase'
import {useParams} from 'react-router-dom'
import Footer from './Footer'

function PlaceInfo() {

  const {sideId} = useParams()
  const {placeId} = useParams()
		const [place, setPlace] = useState([])
  React.useEffect(() => {
    db.collection('sides').doc(sideId).collection('places').onSnapshot(snapshot => {
      setPlace(snapshot.docs.map(doc => ({
        id: doc.id,
        place: doc.data()
    })))})},[])

	return (
		<React.Fragment>
		<Header />
  <section className="page-content-description">
  	<div className="page-content-description-inner">
  	{
	place?.map(item =>{
      if(sideId && placeId == item.id){
        return(
          <div className="page-content-description-inner-left">
        <div className="page-content-description-inner-left-headline">
          <h3>{item.place.placeName}</h3>
        </div>
        <div className="page-content-description-inner-left-body">
          <p>{item.place.placeInfo}</p>
        </div>
        </div>
        )
      }
  })
  	}
  		<div className="page-content-description-inner-right">
  			<div className="page-content-description-inner-right-attention">
  				<li className="time">
  					<img src={clock} alt="" />
  					<h4>სანგრძლივობა:</h4>
  					<h5>1 დღე</h5>
  				</li>
  				<li>
  					<div className="attention">
							<img src={alert} alt="" />
							<h4>გაითვალისწინეთ: </h4>
  					</div>
  					<div className="attention-list">
  						<ul>
  							<li>
	  							<span>
		  							ჩაიცვით მოხერხებული სამოსი.
	  						</span>
	  						</li>
  							<li>
  								<span>
	  								თან იქონიეთ თბილი მოსაცმელი,
										საწვიმარი, მოხერხებულიფეხსაცმელი.
  								</span>
  							</li>
  						</ul>
  					</div>
  				</li>
  			</div>
  		</div>
  	</div>
  </section>
  {
	place?.map(item =>{
      if(sideId && placeId == item.id){
        return(
			<Gallery image1={item.place.gI1} image2={item.place.gI2} image3={item.place.gI3}  />
        )
      }
  })
  }
  <Places sideId={sideId} />
  <Footer/>
  </React.Fragment>
	)
}

export default PlaceInfo