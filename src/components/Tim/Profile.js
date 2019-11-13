import React from "react";
import cover1 from '../../Gambar-UI/coverprofile.png'
import cover2 from '../../Gambar-UI/persipura.jpg'
import Tim from './Tim'
import {  MDBContainer,MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Profile = () => {
  return (
    <MDBContainer>
    <section className="my-5">
        <MDBRow>
          <Tim/>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src={cover1}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3" style={{color:"white"}}>Tentang Persipura</h5>
                <p className="grey-text">
                Persatuan Sepak bola Indonesia Jayapura (disingkat Persipura Jayapura) adalah sebuah klub sepak bola Indonesia yang bermarkas di Jayapura, Papua. 
                Prestasi tertingginya hingga kini adalah menjadi empat kali juara Liga Indonesia dari tahun 2005 hingga 2013. 
                Merupakan tim kebanggan Masyarakat Papua yang bermarkas di Stadion Mandala Jayapura,Papua. 
                Memiliki supporter yang dikenal dengan Mutiara Hitam yang selalu setia memberikan support kepada tim kesayangan mereka.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="trophy" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3" style={{color:'white'}}>Prestasi Tim</h5>

                <p className="grey-text">
                  Liga Indonesia : 4 Kali (2005, 2009, 2011, 2013)
                </p>
                <p className="grey-text">
                  Piala AFC : Perempat Final (2011), Semifinal(2014)
                </p>
                <p className="grey-text">
                  Indonesia Inter Island Cup : Juara (2011)
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src={cover2}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
        </MDBRow>
      </section>
      </MDBContainer>
  );
}

export default Profile;