import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';
import Email from '../../Gambar-UI/email.png';
import EmailBackground from '../../Gambar-UI/emailbackground.png';

class WaitingEmailVerification extends Component {

    onBtnResendEmailClick = () => {
        console.log(this.props.location.search)
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        axios.post(API_URL + '/user/resendemailconfirm', {
            email: params.email
        }).then(res => {
            alert(res.data.message)
        }).catch(err => {
            console.log(err.response)
            alert(err.response.data.message)
        })
        console.log('test')
    }

    render() {
        return (
            <div className="container">
                <div className='row pt-5 pb-5' style={{marginTop:'60px'}}>
                    <div className="col-6 pt-5">
                        <img src={EmailBackground}  style={{width:'500px'}}/>
                    </div>
                    <div className=" col-6 pt-5 text-center">
                        <h3 style={{paddingTop:'70px',color:"black"}}>Silahkan Periksa Email anda </h3>
                        <h5 style={{color:"black"}}>Klik Button Dibawah Bila Tidak Menerima Email</h5>
                        <input type="button" className="btn btn-primary" value="Resend Email" onClick={this.onBtnResendEmailClick} style={{marginBottom:"100px"}} />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default WaitingEmailVerification;