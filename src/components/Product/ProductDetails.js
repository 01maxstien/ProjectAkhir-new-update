import React, { Component } from 'react';
import {FavoriteBorderOutlined, Favorite} from '@material-ui/icons'
import axios from 'axios'
import { API_URL } from '../../helpers/apiurl';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'

class ProductDetails extends Component {

    state = {
        product : [],
        cartData : [],
        qtyInput : 0
    }

    componentDidMount(){
        this.getProductDetails()
    }

    getProductDetails = () => {
        // localhost:2000/products/2
        axios.get(API_URL + '/product/getproduct/' + this.props.match.params.id)
        .then((res) => {
            console.log(res)
            this.setState({product : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addToCart = () => {
        let cartObj = {
            productId : this.props.match.params.id,
            userId : this.props.user.id,
            quantity : parseInt(this.state.qtyInput)
        }

        // axios.post(API_URL + '/cart/addcart/',cartObj)
        //         .then((res) => {
        //             swal('Add to cart', 'Item added to cart', 'success')
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // localhost:2000/cart?userId=2&productId=1
        axios.get(API_URL + `/cart/getcart?userId=${this.props.user.id}&productId=${this.props.match.params.id}`)
        .then((res) => {
            if(res.data.length > 0){
                cartObj.quantity = parseInt(res.data[0].quantity) + parseInt(this.state.qtyInput)
                axios.put(API_URL + '/cart/' + res.data[0].id, cartObj)
                .then((res) => {
                    swal('Add to cart', 'Item added to cart', 'success')
                })
                .catch((err) => {
                    console.log(err)
                })
            }else{
                axios.post(API_URL + '/cart/addcart/', cartObj)
                .then((res) => {
                    swal('Add to cart', 'Item added to cart', 'success')
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    renderProduct=()=> {
        return this.state.product.map(val=>{
            return (
                <div className='container mt-3'>
                    <div className="row">
                        <div className='col-md-4'>
                            <div className="card" style={{width: '100%',marginTop:"150px"}}>
                                <img className="card-img-top" src={val.imageProduct} alt="Card cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
    
                        <div className='col-md-8' style={{marginTop:"140px"}}>
                            <h1 style={{color:'#4c4c4c'}}>
                            {val.nama} &nbsp;{this.state.wishlist ? <Favorite onClick={() => this.setState({wishlist : !this.state.wishlist})} style={{color:'red',fontSize:32, cursor:'pointer'}}/> : <FavoriteBorderOutlined onClick={() => this.setState({wishlist : !this.state.wishlist})} style={{color:'red',fontSize:32, cursor:'pointer'}}/>}</h1>
                            <div style={{backgroundColor:'#D50000', 
                                        width:"50px",
                                        height:'22px',
                                        color:'white',
                                        textAlign:'center',
                                        display: 'inline-block'}}>
                                {val.discount}%
                            </div>
                            <span style={{fontSize:'12px', 
                                        fontWeight:'600',
                                        color:"#606060", 
                                        marginLeft:'10px',
                                        textDecoration: 'line-through'}}>Rp. {val.harga} </span>
    
                            <div style={{fontSize:'24px',
                                        fontWeight:'700',
                                        color:'#FF5722',
                                        marginTop:'20px'}}>Rp. {val.harga - (val.harga * (val.discount/100))}</div>
    
                            <div className='row'>
                                <div className='col-md-2'>
                                    <div style={{marginTop:'15px', fontSize:'16px', fontWeight:'700', color:'#606060'}}>Jumlah</div>
                                    <input ref="qty" onChange={(e) => this.setState({qtyInput : e.target.value})} type="number" min={0} className="form-control" style={{width:'60px', marginTop:'10px'}}/>
                                </div>
                                <div className='col-md-6'>
                                    <div style={{marginTop:'15px', fontSize:'16px', fontWeight:'700', color:'#606060'}}>Catatan Untuk Penjual (Opsional)</div>
                                    <input type='text' style={{marginTop:'12px'}} placeholder="Contoh: Warna Putih, Ukuran XL" className='form-control'/>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-md-8'>
                                    <p style={{color:'#606060', fontStyle:"italic"}}>{val.deskripsi}
                                    </p>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className="col-md-4">
                                    {
                                        this.props.username !== ''
                                        ?
                                        <input  type="button" onClick={this.addToCart} className='btn btn-success btn-block' value="Tambah ke Keranjang"/>
                                        :
                                        <Link to="/auth" style={{textDecoration:'none'}}>
                                            <input type="button" className='btn btn-success btn-block' value="Tambah ke Keranjang"/>
                                        </Link>
                                    }
                                </div>
                            </div>
                            <div style={{marginTop:"90px"}}>
    
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
                {this.renderProduct()}
            </div>
        )
    }
}

const mapStateToProps = ({user,id}) => {
    return {
        user,id
    }
}
export default connect(mapStateToProps)(ProductDetails)