import React,{Component} from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {connect} from 'react-redux'
import BeritaBox from './BeritaBox'
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';

class Berita extends Component {

    state={
        DataBerita:[],
        listImageBerita:[]
    }

    componentDidMount(){
        this.getDataBerita()
    }

    getDataBerita = () => {
        axios.get(API_URL + '/berita/getBerita')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ DataBerita: res.data })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }


    renderBerita=()=>{
        let jsx = this.state.DataBerita.map(val=>{
            console.log(val.judulBerita)
            return(
                <BeritaBox id={val.id} judulBerita={val.judulBerita} deskripsi={val.deskripsi} tanggalBerita={val.tanggalBerita}  imageBerita={val.imageBerita}/>
            )
        })
        return jsx
    }

  render(){
    return (
        <div className="container"style={{marginTop:"100px"}}>
            {/* <h2 className="judulAwal" style={{color:"white"}}>
          News About Us
        </h2> */}
            <div className="container" style={{marginTop:"100px"}}>
                <div className="justify-content-center">
                    {this.renderBerita()}
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}
export default connect(mapStateToProps,null)(Berita);