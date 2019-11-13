import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../../actions';
import { API_URL } from '../../helpers/apiurl';
import { MDBTable, MDBTableBody, MDBTableHead,MDBTableFoot } from 'mdbreact';

class ManageGalleryFoto extends Component {
    state = { 
        listGalleryFoto: [], 
        inputFotoAdd: '', 
        inputTanggalFotoAdd: moment().format('YYYY-MM-DD'), 
        selectedGalleryFoto: { id: 0, urlFoto: '' },
    }

    getInitialData = () => {
        axios.get(API_URL + '/galleryFoto/getFoto')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listGalleryFoto: res.data })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    componentDidMount() {
        this.props.ubahPikachu('Ryan Gosling')
        this.getInitialData()
    }

    onInputFotoAddChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 200) {
            this.setState({ inputFotoAdd: e.target.value })
        }
    }
  
    onTanggalFotoAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalFotoAdd: e.target.value })
    }

    onBtnAddClick = () => {
        axios.post(API_URL + '/galleryFoto/addFoto', {
            urlFoto: this.state.inputFotoAdd,
            tanggalUpload: this.state.inputTanggalFotoAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete(API_URL + '/galleryFoto/deleteFoto/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

  


    renderListFoto = () => {
        return this.state.listGalleryFoto.map((item) => {
            if(item.id !== this.state.selectedGalleryFoto) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                             <img 
                                src={item.urlFoto}
                                style={{ width: '200px',height:'100px' }}
                            />
                        </td>
                        <td>{moment(item.tanggalUpload).format('YYYY-MM-DD')}</td>
                        <td><input type="button" className='btn btn-danger' value="Delete" onClick={() => this.onBtnDeleteClick(item.id)} /></td>
                    </tr>
                )
            }
        })
    }

    render() {
        console.log(this.props.actorPikachu)
        return (
            <div className="container">
                <center>
                    <h4 style={{marginTop:"150px",color:'white'}}>Manage Gallery Foto</h4>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <MDBTableHead color="elegant-color" style={{color:'white'}}>
                                <tr>
                                    <th>Id</th>
                                    <th>urlFoto</th>
                                    <th>Tanggal Upload</th>
                                    <th colspan="1">Option</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody style={{color:'white',background:'black'}}>
                                {this.renderListFoto()}
                            </MDBTableBody>
                            <MDBTableFoot color="elegant-color" >
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" value={this.state.inputFotoAdd} onChange={this.onInputFotoAddChange}  />
                                    </td>
                                    <td>
                                        <input 
                                            type="date"
                                            value={this.state.inputTanggalFotoAdd}
                                            onChange={this.onTanggalFotoAddChange}
                                        />
                                    </td>
                                    <td>
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

export default connect(mapStateToProps, { ubahPikachu })(ManageGalleryFoto);