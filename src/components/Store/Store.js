import React, { Component } from 'react';
import {connect} from 'react-redux'
import Carousel from '../Store/CarouselStore'
import axios from 'axios';
import { API_URL } from '../../helpers/apiurl';
import ProductBox from '../Product/Productbox'


class Store extends Component {
    
    state={
        DataProduct:[],
        listCategory:[]
    }

    componentDidMount(){
        this.getDataProduct()
    }

    getDataProduct = () => {
        axios.get(API_URL + '/product/getproduct')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ DataProduct: res.data })
                axios.get(API_URL + '/category/getcategory')
                    .then((res) => {
                        console.log('ini list category')
                        this.setState({ listCategory: res.data, selectedEditId: 0 })
                    }).catch((err) => {
                        console.log(err.response)
                    })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    renderProducts=()=>{
        let jsx = this.state.DataProduct.map(val=>{
            return(
                <ProductBox nama={val.nama} harga={val.harga} discount={val.discount} img={val.imageProduct} id={val.id} deskripsi={val.deskripsi}/>
            )
        })
        return jsx
    }

    render() {
        return (
            <div className="container"style={{marginTop:"100px"}}>
                <div className="row">
                    <center>
                    <div className="col-lg-9 mt-4">
                        <Carousel/>
                    </div>
                    </center> 
                </div>
                <div className="container" style={{marginTop:"100px"}}>
                    <div className="row justify-content-center">
                        {this.renderProducts()}
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
export default connect(mapStateToProps,null)(Store);