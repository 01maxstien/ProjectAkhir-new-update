import React, { Component } from 'react';
import Logo from '../../Gambar-UI/logopersipura.png'
import Sapersipura from '../../Gambar-UI/sapersipura.png'
import { 
    MDBContainer, 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBNavItem, 
    MDBNavLink, 
    MDBIcon,
    MDBView ,
    MDBMask,
    MDBDropdown} from 'mdbreact';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { logoutUser } from "../../actions";


class Header extends React.Component {
  constructor(props){
    super(props);
  }
    state = {
        collapse: false
      };
      
      toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
      }


    render() {
        return (
            <div>
                <MDBNavbar expand="md" 
                style={{background:" linear-gradient(to right, rgba(0,0,0,1) 45%, rgba(128,2,2,1) 45%,rgba(128,2,2,1) 55%, rgba(0,0,0,1) 55%"}}  dark expand="md" scrolling fixed="top">
                {/* <MDBNavbar expand="md" transparent scrolling color="info" dark expand="md" scrolling fixed="top"> */}
                    <MDBNavbarBrand href="/">
                        <img src={Logo} style={{width:"50px"}} alt="LOGO"/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={ this.toggleCollapse } />
                    <MDBCollapse isOpen = { this.state.collapse } navbar>
                        <MDBNavbarNav left >
                                <MDBNavItem >
                                    <MDBNavLink to="/" style={{color:"white",fontFamily:"Arial"}}>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/berita" style={{color:"white",fontFamily:"Arial"}}>News</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav style={{color:"white",fontFamily:"Arial"}}>
                                            <div className="d-none d-md-inline"><b>Gallery</b></div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/galleryfoto" style={{color:"black",fontFamily:"Arial"}}>Photo</MDBNavLink>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/galleryvideo" style={{color:"black",fontFamily:"Arial"}}>Video</MDBNavLink>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                <MDBDropdown>
                                        <MDBDropdownToggle nav style={{color:"white",fontFamily:"Arial"}}>
                                            <div className="d-none d-md-inline"><b>Profile</b></div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/tim" style={{color:"black",fontFamily:"Arial"}}>Tim</MDBNavLink>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/player" style={{color:"black",fontFamily:"Arial"}}>Squad</MDBNavLink>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/store" style={{color:"white",fontFamily:"Arial"}}>Store</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/schedule" style={{color:"white",fontFamily:"Arial"}}>Match</MDBNavLink>
                                </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            {
                                this.props.user.username !== ''
                                ?
                                <>
                                    <MDBNavItem>
                                        <MDBNavLink style={{color:"white"}}>Hello,{this.props.user.username}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink style={{color:"white"}}>{this.props.user.role}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <div className="d-none d-md-inline"><b>Options</b></div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            {
                                                this.props.user.role =='admin'
                                                ?
                                                <>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="/admin" style={{color:"black",fontFamily:"Arial"}}>Dashboard Admin</MDBNavLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem divider/>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="/"style={{color:"black",fontFamily:"Arial"}} onClick={this.props.logoutUser}>Logout</MDBNavLink>
                                                </MDBDropdownItem> 
                                                </>
                                                :
                                                <>
                                                 <MDBDropdownItem>
                                                    <MDBNavLink to="/cart" style={{color:"black",fontFamily:"Arial"}}>Cart</MDBNavLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="/admin" style={{color:"black",fontFamily:"Arial"}}>History</MDBNavLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem divider/>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="/"style={{color:"black",fontFamily:"Arial"}} onClick={this.props.logoutUser}>Logout</MDBNavLink>
                                                </MDBDropdownItem> 
                                                </>

                                            }
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                      
                                    </MDBNavItem> 
                                </>
                                :
                                <>
                                  <MDBNavbarBrand href="/">
                                    <MDBNavLink to='/auth' style={{color:"white",fontFamily:"Arial"}}>  
                                    <MDBIcon icon="sign-in-alt" style={{height:"50px",marginRight:"10px"}}/> 
                                        <img src={Sapersipura} style={{width:"130px"}} alt="LOGO"/>
                                    </MDBNavLink>
                                 </MDBNavbarBrand>
                                </>
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

const mapStateToProps = ({user,role}) => {
    return {
        user,role
    }
}

export default connect(mapStateToProps, {logoutUser})(Header)