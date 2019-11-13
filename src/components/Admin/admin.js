import React, { Component } from 'react';
import {MDBNavLink} from 'mdbreact'


class admin extends Component {
    render() {
        return (
            <div className="container">
                <div style={{marginTop:"150px"}}>
                     <h2 className="text-center pr-5" style={{color:"white",fontFamily:'Arial'}}>Welcome Admin</h2>
                 </div>
                <div style={{marginTop:"80px",marginBottom:'150px'}}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header text-center">Manage News</div>
                                <div className="card-body text-center">
                                    <MDBNavLink to='/manageBerita' style={{color:"white",fontFamily:"Arial"}}>  
                                        <button type="button" className="btn btn-danger btn-sm ">CLick Here !</button>
                                    </MDBNavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header text-center">Manage Gallery Foto</div>
                                <div className="card-body text-center">
                                   <MDBNavLink to='/manageGaLleryFoto' style={{color:"white",fontFamily:"Arial"}}>  
                                        <button type="button" className="btn btn-danger btn-sm justify-items">CLick Here !</button>
                                    </MDBNavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header text-center">Manage Gallery Video</div>
                                <div className="card-body text-center">
                                    <MDBNavLink to='/manageGalleryVideo' style={{color:"white",fontFamily:"Arial"}}>  
                                        <button type="button" className="btn btn-danger btn-sm ">CLick Here !</button>
                                    </MDBNavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header text-center">Manage Player</div>
                                <div className="card-body text-center">
                                    <MDBNavLink to='/managePlayer' style={{color:"white",fontFamily:"Arial"}}>  
                                        <button type="button" className="btn btn-danger btn-sm ">CLick Here !</button>
                                    </MDBNavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header text-center">Manage Product</div>
                                <div className="card-body text-center">
                                   <MDBNavLink to='/manageProduct' style={{color:"white",fontFamily:"Arial"}}>  
                                        <button type="button" className="btn btn-danger btn-sm justify-items">CLick Here !</button>
                                    </MDBNavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header text-center">Manage Match</div>
                                <div className="card-body text-center">
                                    <MDBNavLink to='/manageMatch' style={{color:"white",fontFamily:"Arial"}}>  
                                        <button type="button" className="btn btn-danger btn-sm ">CLick Here !</button>
                                    </MDBNavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>            
        )
    }
}

export default admin;