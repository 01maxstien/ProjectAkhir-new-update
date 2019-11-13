import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../../actions';
import { API_URL } from '../../helpers/apiurl';
import { MDBTable, MDBTableBody, MDBTableHead,MDBInput,MDBTableFoot } from 'mdbreact';

class ManageProduct extends Component {
    state = { 
        listProduct: [], 
        listCategory: [],
        inputNamaAdd: '', 
        inputDeskripsiAdd: '',
        selectedCategoryAdd: 0,
        inputHargaAdd: 0,
        inputDiscountAdd:0,
        inputTanggalInputAdd: moment().format('YYYY-MM-DD'),
        inputImageProductAdd:'',
        selectedEditId: 0,
        inputNamaEdit: '', 
        inputDeskripsiEdit: '',
        selectedCategoryEdit: 0,
        inputHargaEdit: 0,
        inputDiscountEdit:0,
        inputTanggalInputEdit: moment().format('YYYY-MM-DD'),
        inputImageProductEdit:'',
        selectedProduct: { id: 0, nama: '' }
    }

    getInitialData = () => {
        axios.get(API_URL + '/product/getproduct')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listProduct: res.data })
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

    componentDidMount() {
        this.props.ubahPikachu('Ryan Gosling')
        this.getInitialData()
    }

    
    onInputNamaAddChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 15) {
            this.setState({ inputNamaAdd: e.target.value })
        }
    }

    onInputDeskripsiAddChange = (e) => {
        this.setState({ inputDeskripsiAdd: e.target.value })
    }

    onSelectCategoryAddChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedCategoryAdd: parseInt(e.target.value) })
    }

    onInputHargaAddChange = (e) => {
        this.setState({ inputHargaAdd: e.target.value })
    }

    onTanggalInputAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalInputAdd: e.target.value })
    }

    onDiscountInputAddChange=(e)=>{
        this.setState({inputDiscountAdd:e.target.value})
    }

    onInputImageProductAddChange=(e)=>{
        this.setState({inputImageProductAdd:e.target.value})
    }

    onInputNamaEditChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 15) {
            this.setState({ inputNamaEdit: e.target.value })
        }
    }

    onInputDeskripsiEditChange = (e) => {
        this.setState({ inputDeskripsiEdit: e.target.value })
    }

    onSelectCategoryEditChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedCategoryEdit: parseInt(e.target.value) })
    }

    onInputHargaEditChange = (e) => {
        this.setState({ inputHargaEdit: e.target.value })
    }

    onTanggalInputEditChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalInputEdit: e.target.value })
    }

    onDiscountInputEditChange=(e)=>{
        this.setState({inputDiscountEdit:e.target.value})
    }

    onInputImageProductEditChange=(e)=>{
        this.setState({inputImageProductEdit:e.target.value})
    }

    onBtnAddClick = () => {
        axios.post(API_URL + '/product/addproduct', {
            nama: this.state.inputNamaAdd,
            deskripsi: this.state.inputDeskripsiAdd,
            categoryId: this.state.selectedCategoryAdd,
            harga: parseInt(this.state.inputHargaAdd),
            discount:parseInt(this.state.inputDiscountAdd),
            imageProduct:this.state.inputImageProductAdd,
            tanggalInput: this.state.inputTanggalInputAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete(API_URL + '/product/deleteproduct/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    onBtnSaveUpdateClick = () => {
        axios.put(API_URL + '/product/editproduct/' + this.state.selectedEditId, {
            nama: this.state.inputNamaEdit,
            deskripsi: this.state.inputDeskripsiEdit,
            categoryId: this.state.selectedCategoryEdit,
            harga: parseInt(this.state.inputHargaEdit),
            discount:parseInt(this.state.inputDiscountEdit),
            imageProduct:this.state.inputImageProductEdit,
            tanggalInput: this.state.inputTanggalInputEdit
        }).then(res => {
            this.getInitialData();
        }).catch(err => {
            console.log(err)
        })
    }

    onBtnSelectProductClick = (product) => {
        this.setState({ selectedProduct: product })
        this.getImageByProductId(product.id)
    }

    renderListCategory = () => {
        return this.state.listCategory.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.nama}</option>
            )
        })
    }

    renderListProduct = () => {
        return this.state.listProduct.map((item) => {
            if(item.id !== this.state.selectedEditId) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.deskripsi}</td>
                        <td>{item.namaCategory}</td>
                        <td>{item.harga}</td>
                        <td>{item.discount}</td>
                        <td>{moment(item.tanggalInput).format('YYYY-MM-DD')}</td>
                        <td>
                            <img 
                                src={item.imageProduct}
                                style={{ width: '200px',height:'100px' }}
                            />
                        </td>
                        <td>
                            <input 
                                type="button" className='btn btn-warning'
                                value="Edit" 
                                onClick={() => this.setState({ 
                                        selectedEditId: item.id,
                                        inputNamaEdit: item.nama,
                                        inputDeskripsiEdit: item.deskripsi,
                                        inputHargaEdit: item.harga,
                                        inputDiscountEdit:item.discount,
                                        inputTanggalInputEdit: moment(item.tanggalInput).format('YYYY-MM-DD'),
                                        inputImageProductEdit:item.imageProduct,
                                        selectedCategoryEdit: item.categoryId
                            })}/>
                        </td>
                        <td><input type="button" className='btn btn-danger' value="Delete" onClick={() => this.onBtnDeleteClick(item.id)} /></td>
                    </tr>
                )
            }

            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <input type="text" value={this.state.inputNamaEdit} onChange={this.onInputNamaEditChange}  />
                    </td>
                    <td>
                        <textarea 
                            value={this.state.inputDeskripsiEdit} 
                            onChange={this.onInputDeskripsiEditChange}
                        />
                    </td>
                    <td>
                        <select 
                            onChange={this.onSelectCategoryEditChange} 
                            value={this.state.selectedCategoryEdit}
                        >
                            <option value={0}>-- Pilih Category --</option>
                            {this.renderListCategory()}
                        </select>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={this.state.inputHargaEdit}
                            onChange={this.onInputHargaEditChange}
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={this.state.inputDiscountEdit}
                            onChange={this.onDiscountInputEditChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="date"
                            value={this.state.inputTanggalInputEdit}
                            onChange={this.onTanggalInputEditChange}
                        />
                    </td>
                    <td>
                        <input type="text" value={this.state.inputImageProductEdit} onChange={this.onInputImageProductEditChange}  />
                    </td>
                    <td><input type="button" className='btn btn-primary' value="Cancel" onClick={() => this.setState({ selectedEditId: 0 })}/></td>
                    <td><input type="button" className='btn btn-success' value="Save" onClick={this.onBtnSaveUpdateClick} /></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <center>
                    <h4 style={{marginTop:"150px",color:'black'}}>Manage Product</h4>
                    <div className="table-responsive">
                        <table table className="table table-striped">
                            <MDBTableHead color="elegant-color" style={{color:'white'}}>
                                <tr>
                                    <th>Id</th>
                                    <th>Nama</th>
                                    <th>Deskripsi</th>
                                    <th>Category</th>
                                    <th>Harga</th>
                                    <th>Discount</th>
                                    <th>Tanggal Input</th>
                                    <th>Image Product</th>
                                    <th colspan="3">Option</th>
                                
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody style={{color:'black'}}>
                                {this.renderListProduct()}
                            </MDBTableBody>
                            <MDBTableFoot color="elegant-color" style={{color:'white'}}>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" value={this.state.inputNamaAdd} onChange={this.onInputNamaAddChange}  />
                                    </td>
                                    <td>
                                        <textarea 
                                            value={this.state.inputDeskripsiAdd} 
                                            onChange={this.onInputDeskripsiAddChange}
                                        />
                                    </td>
                                    <td>
                                        <select onChange={this.onSelectCategoryAddChange}>
                                            <option value={0}>-- Pilih Category --</option>
                                            {this.renderListCategory()}
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={this.state.inputHargaAdd}
                                            onChange={this.onInputHargaAddChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={this.state.inputDiscountAdd}
                                            onChange={this.onDiscountInputAddChange}
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            type="date"
                                            value={this.state.inputTanggalInputAdd}
                                            onChange={this.onTanggalInputAddChange}
                                        />
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.inputImageProductAdd} onChange={this.onInputImageProductAddChange}  />
                                    </td>
                                    <td colspan="2">
                                        <input type="button" className='btn btn-primary' value="Add" onClick={this.onBtnAddClick} />
                                    </td>
                                    
                                </tr>
                            </MDBTableFoot>
                        </table>
                    </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { actorPikachu: state.pikachu }
}

export default connect(mapStateToProps, { ubahPikachu })(ManageProduct);