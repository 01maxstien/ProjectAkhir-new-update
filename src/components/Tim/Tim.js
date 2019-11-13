import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import jackson from '../../Gambar-UI/jacksentiago.jpg'
import btm from '../../Gambar-UI/tommymano.jpg'
import rm from '../../Gambar-UI/rudymaswi.jpg'

const Tim = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5" style={{color:'white'}}>
        Our Management
      </h2>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={btm}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color:'white'}}>President</h4>
            <p className="grey-text">
              Benhur Tommy Mano
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={rm}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color:'white'}}>Manager</h4>
            <p className="grey-text">
              Rudy Maswi
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={jackson}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color:'white'}}>Coach</h4>
            <p className="grey-text">
              Jackson F Tiago
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Tim;