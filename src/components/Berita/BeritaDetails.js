import React, { Component, PropTypes } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import { API_URL } from '../../helpers/apiurl';

class BeritaDetails extends Component {
    
    

    state = {
        Berita : []
        }  
    
   
    componentDidMount(){
        this.getDataBeritaDetails()
    }

    getDataBeritaDetails = () => {
        axios.get(API_URL + '/berita/getberita/'+this.props.match.params.id)
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ Berita: res.data})
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    
    renderBeritaDetails=()=> {
        return this.state.Berita.map(val=>{
            return (
                <div className='container mt-3'>
                    <div className="row">
                        <div>
                            <div className="card" style={{width: '100%',marginTop:"150px"}}>
                                <img className="card-img-top" src={val.imageBerita} alt="Card cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                           <h1>{val.judulBerita}</h1>
                           <p>{val.tanggalBerita}</p>
                           <p>{val.deskripsi}</p>
                        </div>
                    </div>
                </div>
            );

        })
    }

    render(){
        return(
            <div>
                {this.renderBeritaDetails()}
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(BeritaDetails);