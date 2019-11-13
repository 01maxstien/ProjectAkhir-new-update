import React, { Component } from 'react';
import Axios from 'axios'
import {connect} from 'react-redux'
import { API_URL } from '../../helpers/apiurl';
import swal from 'sweetalert'

class Cart extends Component {
    state = {
        cartData : [],
        tampungCart:[],
        quantity:0
    }

    componentDidMount(){
        this.getDataCart()
        this.getTampungCart()
    }

    deleteCartItem = (id) => {
        Axios.delete(API_URL + '/cart/deletecart/' +id)
        .then((res) => {
            swal('Success', 'Item Deleted', 'success')
            this.getDataCart()
        })
        .catch((err) => {
            swal('Error', 'There is an error', 'error')
        })
    }

    getDataCart = () => {
        Axios.get(API_URL + '/cart/getcart/'+this.props.match.params.id)
        .then(res => {
          
            console.log(res.data)
            this.setState({cartData : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    getTampungCart = () => {
        Axios.get(API_URL + '/cart/getcartoutjoin')
        .then(res => {
            console.log(res.data)
            this.setState({tampungCart : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderCart = () => {
        var jsx = this.state.cartData.map((val, idx) => {
            return (
                <tr>

                    <td>{val.Productname}</td>
                    <td>{val.price - (val.price * (val.discount/100))}</td>
                    <td><div className="btn-group">
                        <button type="button" className="btn btn-secondary" onClick={() => this.onBtnEditQty('min', idx)}>-</button>
                        <button type="button" className="btn btn-secondary">{val.quantity}</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.onBtnEditQty('add', idx)}>+</button>
                    </div></td>
                    <td>{(val.price - (val.price * (val.discount/100))) * val.quantity}</td>
                    <td><input type="button" className="btn btn-danger btn-block" onClick={() => this.deleteCartItem(val.id)} value="Delete"/></td>
                </tr>
            )
        })

        return jsx
    }

    onBtnEditQty = (action, idx) => {
        let arrCart = this.state.tampungCart

        if(action == 'min'){
            if(arrCart[idx].quantity > 1){
                arrCart[idx].quantity -= 1
                Axios.put(API_URL + '/cart/editcart/' + arrCart[idx].id, arrCart[idx])
                .then(res => this.getDataCart(this.props.id))
                .catch(err => console.log(err))
            }
        }else if(action == 'add'){
            arrCart[idx].quantity += 1
            Axios.put(API_URL + '/cart/editcart/' + arrCart[idx].id, arrCart[idx])
            .then(res => this.getDataCart(this.props.id))
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div className="container" style={{marginTop:'200px'}}>
                <table className="table mt-3 text-cente striped" style={{color:'white'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                         <tbody>
                            {
                                 this.state.cartData.length>0
                                 ?
                                 <>
                                 
                                 {this.renderCart()}
                                 
                                 </>
                                 :
                                 <>
                                 <td><h3>Cart Masih Kosong</h3></td>
                                 </>
                            }
                           
                        </tbody>
                </table>
                
            </div>
        );
    }
}

const mapStateToProps = ({user,id}) => {
    return {
        user,id
    }
}

export default connect(mapStateToProps)(Cart)