import React, { Component, PropTypes } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import { API_URL } from '../../helpers/apiurl';

class MatchDetails extends Component {
    state = {
        MatchDetails : []
        }  
    
   
    componentDidMount(){
        this.getDataMatchDetails()
    }

    getDataMatchDetails = () => {
        axios.get(API_URL + '/match/getmatch/'+this.props.match.params.id)
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ MatchDetails: res.data})
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    
    renderMatchDetails=()=> {
        return this.state.MatchDetails.map(val=>{
            return (
                <div className='container mt-3'>
                    <div className="row">
                        <div>
                            <div className="card" style={{width: '100%',marginTop:"150px"}}>
                                <img className="card-img-top" src={val.imageTimHome} alt="Card cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                           <h1>{val.skorHome}</h1>
                           {/* <p>{val.tanggalBerita}</p>
                           <p>{val.deskripsi}</p> */}
                        </div>
                    </div>
                </div>
            );

        })
    }

    render(){
        return(
            <div>
                {this.renderMatchDetails()}
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(MatchDetails);