import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'
// import './Style.css'

const MatchTable=(props)=>{
    return(
      <div className="container" style={{backgroundColor:'whitesmoke'}}>
        <div className="row mt-5">
            <div className="col-3 text-center pt-4"> 
              <h5 className="card-text"> {moment(props.tanggalMatch).format('LL')} </h5>
            </div>
            <div className="col-2 text-center">
              <img className="card-img-top img" style={{height:'100px',width:'100px'}} src={props.imgAway} alt="Card" />
            </div>
            <div className="col-1 text-center pt-4">
              <h5 className="card-text"> {props.skorHome} </h5>
            </div>
            <div className="col-1 text-center pt-4">
              <h5>VS</h5>
            </div>  
            <div className="col-1 text-center pt-4">
              <h5 className="card-text"> {props.skorAway} </h5>
            </div>
            <div className="col-2 text-center">
              <img className="card-img-top img" style={{height:'100px',width:'100px'}} src={props.imgHome} alt="Card" />
            </div>
            <div className="col-2 pt-4" style={{alignItems:"center"}}>
              <Link to={"/match-details/"+props.id}>
                <input type="button" className="d-block btn btn-primary btn-block" value="Match Details"/>
              </Link>
            </div>
        </div>
      </div>
        
    );
};
 
export default MatchTable;

