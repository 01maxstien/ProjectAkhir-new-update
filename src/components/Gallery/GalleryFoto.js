import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Gallery.css";
import {connect} from 'react-redux'
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';

class GalleryFoto extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: []
}

componentDidMount(){
  this.getDataFoto()
}

getDataFoto = () => {
  axios.get(API_URL + '/galleryFoto/getFoto')
      .then((res) => {
          console.log('Masuk Then')
          console.log(res.data)
          this.setState({ images: res.data })
      }).catch((err) => {
          console.log('Masuk Catch')
          console.log(err.response)
      })
}

renderImages = () => {
  const { images } = this.state;
  console.log('Images = ',images)

return images.map((val,photoIndex) => {
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={val.urlFoto} alt="Gallery" className="img-fluid"  style={{height:'250px',width:'400px'}} onClick={()=>
        this.setState({ photoIndex, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin" style={{marginTop:"150px",marginBottom:"20px"}}>
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].urlFoto}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}
export default connect(mapStateToProps)(GalleryFoto);