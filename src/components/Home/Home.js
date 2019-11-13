import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background  from '../../Gambar-UI/backgroundhome.png'
import './Home.css'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,MDBView ,MDBMask} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Klasemen from '../Klasemen/klasemen'
import Berita from '../Berita/Berita'
import Liga  from '../../Gambar-UI/liga1.jpg'



    

class Home extends Component {
    render() {
        return (
          <div>
              <div style={{marginTop:"20px"}}>
                <MDBView src={Background} >
                  <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                  <div className="banner-area" id="home">
                    <div className="containertext">
                      <span className="text1">Welcome <br />To Our Website</span>
                      <span className="text2"></span>
                    </div>
                  </div>
                  </MDBMask>
                </MDBView>
              </div> 
              <div className='row text-center mt-5'>
                <div className="col-6" style={{paddingTop:'200px'}}>
                  <img src={Liga}/>
                </div>
                <div className="col-6">
                  <Klasemen/>
                </div>
              </div>
          </div>
        );
    }
}

export default Home;