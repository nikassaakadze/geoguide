import React from 'react'
import '../styles/Application.css'
import gPlay from '../UI/gplay.svg'
import aStore from "../UI/appstore.svg"

function Application() {
	return (
    <div data-aos="fade-up" className="app">
    <div className="app-inner">
    <div className="app-inner-left">
      <p>
        შეგიძლიად <b>გადმოწეროთ</b> აპლიკაცია და მარტივად იპოვოთ თქვენთვის 
        სასურველი ადგილი სმარტფონის საშუალებით. 😊😊😊
      </p>
    </div>
    <div className="app-inner-right">
      <li>
        <img src={gPlay} alt="" />
        <img src={aStore} alt="" />
      </li>
    </div>
    </div>
  </div>
)
}

export default Application