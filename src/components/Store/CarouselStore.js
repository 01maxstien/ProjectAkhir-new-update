import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import  Gambar1 from './Gambar/1.png'
import  Gambar2 from './Gambar/2.png'

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        style={{width:"100%"}}
      >
        <MDBCarouselInner style={{width:"100%"}}>
          <MDBCarouselItem itemId="1" >
            <MDBView  >
              <img className="d-block w-100" src={Gambar1} alt="First slide"/>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={Gambar2} alt="Second slide"/>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;