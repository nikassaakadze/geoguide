import React from 'react';
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import UploadModal from './UploadModal';

const Header = () => {
	return(
  <header>
    <div className="header-inner">
      <div className="header-inner-left">
        <div className="header-inner-left-logo">
          <Link to="/"><h3><strong>Travel</strong>Guide</h3></Link>
        </div>
      </div>
      <div className="header-inner-right">
        <nav className="header-inner-right-navlist">
          <ul>
            <li><Link to="/"><strong>მთავარი</strong></Link></li>
            <li><Link to="/map/MUrARdHadn2fCf2zEEix/LqIfnaf85jAOroBFPMsy">რუკა</Link></li>
            <li><Link to="/places/8QtW79PzbwktKqQcNWI9/გურია">ადგილები</Link></li>
            <li><a href="">ჩვენს შესახებ</a></li>
            <li> <UploadModal /> </li>
          </ul>
        </nav>
        <div className="responsive-navBurger">
        	<MenuIcon className="burger" />
        </div>	
      </div>
    </div>
  </header>
	)
}

export default Header