import React from 'react';
import './PlayerBox.css'
// import './Cardplayer.css'


const PlayerBox =(props)=> {
        return (
            <div className="card-container-player mx-auto mt-5">
                <div className='row'>
                    <div className="card-player card-front-player" style={{height:'290px'}}>
                        <img className="card-img-top" src={props.imagePlayer} style={{height:'350px'}} alt="Card image cap" />
                        <div className="card-footer-player grey-color text-center">
                            <h5 className="card-title">{props.nama}</h5>
                        </div>
                    </div>
                    <div className="card-player card-back-player" style={{height:'350px'}}>
                        <div className="card-body-player text-center ">
                            <p className="card-text-player">Nomor Punggung : {props.nomorPunggung}</p>
                            <p className="card-text-player">Tanggal Lahir  :{props.TanggalLahir}</p>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }

export default PlayerBox;

// const PlayerBox =(props)=> {
//     return(
//         <div className="container-player">
//         <div className="card-player"> 
//             <div className="img-box">
//                 <img src={props.imagePlayer} alt="Card image cap"  style={{width:'100%'}}/>
//             </div>
//             <div className="content-player">
//                 <h2>Someone Famous<br /><span>UX/UI Designer</span></h2>
//                 <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
//                 <ul>
//                     <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /> </a></li>
//                     <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /> </a></li>
//                     <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /> </a></li>
//                 </ul>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default PlayerBox;