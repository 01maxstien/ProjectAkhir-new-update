import React from 'react';
import BankPapua from '../../Gambar-UI/LogoBankPapua.png'
import Freeport from '../../Gambar-UI/PT Freeport Indonesia.png'
import specs from '../../Gambar-UI/specs.png'
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn,MDBIcon } from "mdbreact";

const FooterPage = () => {
    return (
      <MDBFooter  className="font-small pt-4 mt-4" style={{background:"#760000",width:'100%'}} scrolling fixed="bottom">
        <MDBContainer fluid className="text-center text-md-left" style={{background:"black"}}>
          <MDBRow>
            <MDBCol md="4" className="mt-3">
              <h5 className="title" style={{marginLeft:"40px",fontFamily:'Arial'}}> <b>Address</b></h5>
              <ul>
                <li className="list-unstyled text-left">
                <MDBIcon icon="map-marker-alt"> Jl.raya Sentani-Waena, Jayapura, Papua</MDBIcon> 
                </li>
                <li className="list-unstyled text-left">
                <MDBIcon icon="phone">   081355265316</MDBIcon> 
                </li>
                <li className="list-unstyled text-left">
                <MDBIcon far icon="envelope">   maxstienhosang@gmail.com </MDBIcon>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3" className="mt-3">
              <h5 className="title text-left" style={{marginLeft:"40px"}}> <b>Menu</b></h5>
              <ul>
                <li className="list-unstyled text-left">
                  <a href="#!">Home</a>
                </li>
                <li className="list-unstyled text-left">
                  <a href="#!">News</a>
                </li>
                <li className="list-unstyled text-left">
                  <a href="#!">Gallery</a>
                </li>
                <li className="list-unstyled text-left">
                  <a href="#!">Store</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="5" className="mt-3">
              <h5 className="title" style={{marginLeft:'50px'}}> <b>Social Media</b></h5>
              <ul style={{display:"flex"}}>
                <li className="list-unstyled text-left">
                    <MDBBtn rounded color="#760000" style={{color:"white",background:"#760000"}}> <MDBIcon fab icon="facebook"/>  Facebook </MDBBtn>
                </li>
                <li className="list-unstyled text-left">
                    <MDBBtn rounded color="#760000" style={{color:"white",background:"#760000"}} > <MDBIcon fab icon="instagram" />  Instagram </MDBBtn>
                </li>
                <li className="list-unstyled text-left">
                 < MDBBtn rounded color="#760000"style={{color:"white",background:"#760000"}}> <MDBIcon fab icon="twitter" />  Twitter </MDBBtn>
                </li>
                <li className="list-unstyled text-left">
                 < MDBBtn rounded color="#760000" style={{color:"white",background:"#760000"}}> <MDBIcon fab icon="youtube" />  Youtube </MDBBtn>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
        <div className="footer-copyright text-center py-3" style={{borderTopColor:"black"}}>
            <a className="ins-ic">
                <img src={Freeport} style={{width:"100px"}} alt="LOGO"/>
            </a>
            <a className="ins-ic">
                 <img src={BankPapua} style={{width:"100px"}} alt="LOGO"/>
            </a>
            <a className="ins-ic">
                <img src={specs} style={{width:"100px"}} alt="LOGO"/>
            </a>
        </div>
    
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
  
  export default FooterPage;