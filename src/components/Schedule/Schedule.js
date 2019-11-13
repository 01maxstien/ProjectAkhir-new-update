import React, { Component } from 'react';
import {connect} from 'react-redux'
import MatchTable from '../../components/Match/MatchTable'
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';

class Match extends Component {
    state={
        DataMatch:[],
        listTIm:[]
    }

    componentDidMount(){
        this.getDataMatch()
    }

    getDataMatch = () => {
        axios.get(API_URL + '/match/getmatch')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ DataMatch: res.data })
                axios.get(API_URL + '/tim/gettim')
                    .then((res) => {
                        console.log('ini list category')
                        this.setState({ listTim: res.data, selectedEditId: 0 })
                    }).catch((err) => {
                        console.log(err.response)
                    })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    renderMatch=()=>{
        let jsx = this.state.DataMatch.map(val=>{
            return(
                <MatchTable id={val.id} 
                            tanggalMatch={val.tanggalMatch} 
                            idTimHome={val.idTimHome} 
                            imgHome={val.imageTimHome}
                            skorHome={val.skorHome} 
                            skorAway={val.skorAway} 
                            imgAway={val.imageTimAway}
                />
            )
        })
        return jsx
    }
    render() {
        return (
            <div className="container">
                <div className="text-center" style={{marginTop:"100px"}}>
                    <h3 style={{color:'black',paddingTop:'50px'}}> LIGA 1 2019/2020</h3>
                </div>
                <div>
                        {this.renderMatch()}
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
export default connect(mapStateToProps,null)(Match);