import React from 'react'
import '../styles/Gallery.css'
import ModalImage from "react-modal-image";

function Gallery({image1, image2, image3}) {
	return (
	  <section className="gallery">
	  	<div className="gallery-inner">
	  		<div className="gallery-inner-headline">
	  			<h5>გალერეა</h5>
	  		</div>
	  		<div className="gallery-inner-body">
	  			<div className="gallery-inner-body-grid">
	  			<div className="gallery-inner-body-grid-left">
				  <ModalImage
					small={image1}
					large={image1}
					className="gallery-image-0"
					hideDownload={true}
					style={{width: "80%"}}
				  />
	  			</div>
	  			<div className="gallery-inner-body-grid-right">
				  <ModalImage
					small={image2}
					large={image2}
					className="gallery-image-1"
					hideDownload={true}
					style={{width: "80%"}}
				  />
				<ModalImage
					small={image3}
					large={image3}
					className="gallery-image-2"
					hideDownload={true}
					style={{width: "80%"}}
				  />
	  			</div>
	  			</div>
	  		</div>
	  	</div>
	  </section>
	)
}

export default Gallery