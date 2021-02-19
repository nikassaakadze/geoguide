import React from 'react'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
	return (
    <footer>
    <div className="footer-inner">
      <div className="footer-inner-top">
        <div className="footer-inner-top-box">
          <div className="footer-logo">
             <a href="./index.html">
              <h3><b>Travel</b>Guide</h3>
             </a>
          </div>
        </div>
        <div className="footer-inner-top-box">
          <ul>
            <li><Link to="/" >მთავარი</Link></li>
            <li><Link to="/map/MUrARdHadn2fCf2zEEix/LqIfnaf85jAOroBFPMsy">რუკა</Link></li>
            <li><Link to="/places/8QtW79PzbwktKqQcNWI9/გურია">ადგილები</Link></li>
            <li><Link>ჩვენს შესახებ</Link></li>
          </ul>
        </div>
        <div className="footer-inner-top-box">
          <ul>
            <li><Link to="/places/TFGUEpiioyZqelqM7PZU">აფხაზეთი</Link></li>
            <li><Link to="/places/YrZ9VnxnKzEJWIqO5FhV">სამეგრელო</Link></li>
            <li><Link to="/places/TphdDerMvX9qcxbn6bvT">რაჭა-ლეჩხუმ ქვემო <br/> სვანეთი</Link></li>
            <li><Link to="/places/gkyitzQLOgrjtLc4DKa6">იმერეთი</Link></li>
            <li><Link to="/places/8QtW79PzbwktKqQcNWI9">გურია</Link></li>
            <li><Link to="/places/iZFzoAhsNAwDEevkbgjH">აჭარა</Link></li>
          </ul>
        </div>
        <div className="footer-inner-top-box">
          <ul>
            <li><Link to="/places/LqIfnaf85jAOroBFPMsy">შიდა ქართლი</Link></li>
            <li><Link to="/places/BlwHjxXjF9eNjoCvlhdn">სამცხე-ჯავახეთი</Link></li>
            <li><Link to="/places/yhkII6pR8YsxJlDiWOao">მცხეთა-მთიანეთი</Link></li>
            <li><Link to="/places/wYI0IkP7vJ7254HnRrGF">ქვემო ქართლი</Link></li>
            <li><Link to="/places/SYWOTaiErZKCWZmR7UVT">კახეთი</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-inner-bottom">
        <h5>© {new Date().getFullYear()}  All rights reserved.</h5>
      </div>
    </div>
  </footer>
	)
}

export default Footer