import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import './Berita.css'
import {Link} from 'react-router-dom'
import moment from 'moment';


const BeritaBox = (props) => {
  return (
    <MDBCard className=" pt-2 pb-2" style={{background:"black"}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src={props.imageBerita}
                alt=""
                style={{width:'400px',height:'200px'}}
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <b className="judulBerita">{props.judulBerita}</b>
            </h3>
            <p className="isiberita">
            {moment(props.tanggalBerita).format('MM-DD-YYYY')} 
            </p>
            <p className="isiberita">
                {props.deskripsi} 
            </p>
            <Link to={"/berita-details/"+props.id}>
              <MDBBtn color="primary" size="md">
                Click Me !
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BeritaBox;