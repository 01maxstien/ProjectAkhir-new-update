import React, { Component, PropTypes } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import { API_URL } from '../../helpers/apiurl';
import moment from 'moment'
import './Style.css'

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
                <div className="container mt-5" style={{backgroundColor:'whitesmoke'}}>
                    <div className="text-center" style={{marginTop:"150px"}}>
                        <h2>Match Details</h2>
                        <div className="row mt-5">
                            <div className="col-3 text-center pt-3"> 
                                <h5 className="card-text"> {moment(val.tanggalMatch).format('LL')} </h5>
                                <p className="card-text"> Stadion {val.stadion} </p>
                            </div>
                            <div className="col-2 text-center pb-2">
                                <img className="card-img-top img" style={{height:'100px',width:'100px'}} src={val.imageTimHome} alt="Card" />
                            </div>
                            <div className="col-1 text-center pt-4">
                                <h5 className="card-text"> {val.skorHome} </h5>
                            </div>
                            <div className="col-1 text-center pt-4">
                                <h5>VS</h5>
                            </div>  
                            <div className="col-1 text-center pt-4">
                                <h5 className="card-text"> {val.skorAway} </h5>
                            </div>
                            <div className="col-2 text-center pb-2">
                                <img className="card-img-top img" style={{height:'100px',width:'100px'}} src={val.imageTimAway} alt="Card" />
                            </div>
                            <div className="col-2 pt-4" style={{alignItems:"center"}}>
                                <h5 className="card-text"> Wasit</h5>
                                <p className="card-text">{val.wasit} </p>
                            </div>
                        </div>
                        <div className="row text-center mt-5 pb-5">
                            <div className="col-6">
                                <h5><i class="far fa-futbol"/>{val.golHome}</h5>
                                <h5><i class="fas fa-file" style={{color:'#ebe534'}}/>{val.kuningHome}</h5>
                                <h5><i class="fas fa-file" style={{color:'#e31717'}}/> {val.merahHome}</h5>
                            </div>
                            <div className="col-6">
                                <h5><i class="far fa-futbol"/>{val.golAway}</h5>
                                <h5><i class="fas fa-file" style={{color:'#ebe534'}}/>{val.kuningAway}</h5>
                                <h5><i class="fas fa-file" style={{color:'#e31717'}}/> {val.merahAway}</h5>
                            </div>
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