import React from 'react'
import '../../styles/Slider.css'
import {Link} from 'react-router-dom'
import {db} from '../../util/firebase'
import placeholder from '../../icons/location.svg'

function Slider() {
	const [place, setPlace] = React.useState([])
  const placeId = "MUrARdHadn2fCf2zEEix";
  const sideId = "LqIfnaf85jAOroBFPMsy"
    React.useEffect(() => {
      db.collection('sides').doc(sideId).collection("places").onSnapshot(snapshot => {
        setPlace(snapshot.docs.map(doc => ({
          id: doc.id,
          place: doc.data()
      })))})},[])
	return (
	<section className="slider">
    {
      place?.map(item => {
        if(item.id == placeId){
          return(
            <React.Fragment>
            <div className="slider-inner">
            <div className="slider-inner-left">
              <div className="slider-inner-left-text">
                <h1 className="banner-text"> 
                  მოიძიე <b>საქართველო</b>, აღმოაჩინე ახალი ადგილები და დაგეგმე მოგზაურობა 
                </h1>
                <p>
                  ქართული არქიტექტურა დიდი მრავალფეროვნებითა და თავისებურებით გამოირჩევა. 
                  საქართველოს ყოველ კუთხეს თავისი დამახასიათებელი არქიტექტურული სტილი აქვს და 
                  საცხოვრებელი სახლებიც მხარეების მიხედვით განსხვავდება ერთმანეთისაგან. 
                </p>
                  <Link className="see-on-map" to={`/map/${placeId}/${sideId}`}>
                  <img className="placeholder" src={placeholder} alt="" /> 
                  <small className="place">იხილეთ რუკაზე </small>
                  </Link>
              </div>
            </div>
          </div>
          <div className="banner-image">
            <img className="hero" src={item.place.placeHero} />
          </div>
            </React.Fragment>
          )
        }
      })
    }
  </section>
	)
}

export default Slider