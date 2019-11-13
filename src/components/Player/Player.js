import React,{Component} from "react";
import {connect} from 'react-redux'
import PlayerBox from './PlayerBox'
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';

class Player extends Component {
    state={
        DataPlayer:[]
    }

    componentDidMount(){
        this.getDataPlayer()
    }

    getDataPlayer = () => {
        axios.get(API_URL + '/player/getPlayer')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ DataPlayer: res.data })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    renderPlayer=()=>{
        let jsx = this.state.DataPlayer.map(val=>{
            console.log(val.nama)
            return(
                <PlayerBox 
                nama={val.nama} 
                nomorPunggung={val.nomorPunggung} 
                TanggalLahir={val.TanggalLahir}  
                posisiPemain={val.posisiPemain} 
                imagePlayer={val.imagePlayer} 
                id={val.id}
                />
            )
        })
        return jsx
    }

    
    render() {
        return (
            <div className="container"style={{marginTop:"100px"}}>
                <div className="container" style={{marginTop:"100px"}}>
                    <div className="row justify-content-center">
                        {this.renderPlayer()}
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
export default connect(mapStateToProps)(Player);