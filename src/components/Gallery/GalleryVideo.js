import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Gallery.css";
import {connect} from 'react-redux'
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';

class GalleryVideo extends React.Component {
state = {
  videoIndex: 0,
  isOpen: false,
  videos: []
}
componentDidMount(){
    this.getDataVideo()
  }

getDataVideo = () => {
    axios.get(API_URL + '/galleryVideo/getVideo')
        .then((res) => {
            console.log('Masuk Then')
            console.log(res.data)
            this.setState({ videos: res.data })
        }).catch((err) => {
            console.log('Masuk Catch')
            console.log(err.response)
        })
}
renderVideos = () => {
  // let videoIndex = -1;
  const { videos } = this.state;

return videos.map(val => {
  // videoIndex++;
  // const privateKey = videoIndex;
  return (
    <MDBCol md="4" key={val.id}>
      <figure >
          <iframe src={val.urlVideo} className="embed-responsive-item" allowFullScreen style={{height:'300px',width:'350px'}}></iframe>
      </figure>
    </MDBCol>
    );
  })
}

render() {
// const { videoIndex, isOpen, videos } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin" style={{marginTop:"150px",marginBottom:"20px"}}>
          <MDBRow>
            {this.renderVideos()}
          </MDBRow>
        </div>  
      </MDBContainer>
    );
  }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}
export default connect(mapStateToProps)(GalleryVideo);