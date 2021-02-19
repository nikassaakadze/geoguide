import React from 'react';
import '../../styles/PlacesPage.css';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import Header from '../Header';
import Places from '../Places';
import {db} from '../../util/firebase';
import {Link, useParams} from 'react-router-dom'
import Side from './Side';
import Footer from '../Footer'

function PlacesPage() {
  const {sideId} = useParams()
  const [sides, setSides] = React.useState([])
  const [active, setActive] = React.useState(sideId)
  const {crumb} = useParams()
   React.useEffect(() => {
    db.collection('sides').onSnapshot(snapshot => {
      setSides(snapshot.docs.map(doc => ({
        id: doc.id,
        sides: doc.data()
    })))})},[])

  return (
    <div className="places-wrapper">
    <Header />
      <div className="breadCrumb">
        <span className="crumb">მთავარი</span>
          <KeyboardArrowRightOutlinedIcon/>
        <span className="crumb">ადგილები</span>
          <KeyboardArrowRightOutlinedIcon/>
        <span className="crumb currentBlurred">{crumb}</span>
      </div>
      <div className="places-wrapper-inner">
        <div className="places-list-col">
          {
            sides?.map(item => (
              <Link to={`/places/${item.id}/${item.sides.side}`}>
              <div onClick={() => setActive(item.id)} className={item.id == active ? "active" : "places-list-item"}>
                  <span>{item.sides.side}</span>
                </div>
              </Link>
            ))
          }
        </div>
          <Side />
      </div>
      <Footer />
    </div>
  )
}

export default PlacesPage
