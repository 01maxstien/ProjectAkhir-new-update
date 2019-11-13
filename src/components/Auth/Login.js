import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import{MDBNavLink} from 'mdbreact';
import { 
    inputLoginEmail,
    inputLoginPassword,
    loginUser
} from '../../actions';

class Login extends Component {

    onBtnLoginClick = () => {
      this.props.loginUser(this.props.loginForm)
    }
    renderButtonLogin = () => {
      if(this.props.loginForm.loading) {
        return (<>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </>)
      }

      return <MDBBtn rounded color="danger" style={{borderRadius: "10px"}} onClick={this.onBtnLoginClick}>Login</MDBBtn>
    }
    render() {
        const { 
            email,
            password
        } = this.props.loginForm;

        if(this.props.user.username !== '') {
          return <Redirect to="/" />
        }

        return (
          <div>
            <MDBContainer className="pt-5"  style={{marginBottom:"150px"}}>
              <MDBRow className="justify-content-center"  style={{marginTop:"150px"}} >
                <MDBCol md="6" >
                  <form>
                    <p className="h5 text-center mb-4" style={{color:"white"}}>Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        value={email}
                        onChange={(e) => this.props.inputLoginEmail(e.target.value)}
                        validate
                        error="wrong"
                        success="right"
                        
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        value={password}
                        onChange={(e) => this.props.inputLoginPassword(e.target.value)}
                        validate
                      />
                    </div>
                    <p className="text-danger text-center">
                      {this.props.loginForm.error}
                    </p>
                    <div className="text-center">
                      {this.renderButtonLogin()}
                    </div>
                    <div className="text-center" style={{color:'white'}}>
                     <MDBNavLink to="/register" style={{color:"grey",fontFamily:"Arial"}}>Don't Have Account? Please Register Here !</MDBNavLink>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
          )
    }
}

const mapStateToProps = ({ loginForm, user }) => {
    return { loginForm, user }
}

export default connect(mapStateToProps, {inputLoginEmail,inputLoginPassword,loginUser})(Login);