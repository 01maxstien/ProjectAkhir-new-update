import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../../actions';
import { API_URL } from '../../helpers/apiurl';
import { MDBTable, MDBTableBody, MDBTableHead,MDBTableFoot } from 'mdbreact';


class ManageBerita extends Component {
    state = { 
        listBerita: [], 
        inputJudulAdd: '', 
        inputDeskripsiAdd: '',
        inputTanggalBeritaAdd: moment().format('YYYY-MM-DD'),
        inputImageBeritaAdd:'',
        selectedEditId: 0,
        inputJudulEdit: '', 
        inputDeskripsiEdit: '',
        inputTanggalBeritaEdit: moment().format('YYYY-MM-DD'),
        inputImageBeritaEdit:'',
        selectedBerita: { id: 0, judulBerita: '' },
    }

    getInitialData = () => {
        axios.get(API_URL + '/berita/getberita')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listBerita: res.data })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    componentDidMount() {
        this.props.ubahPikachu('Ryan Gosling')
        this.getInitialData()
    }

  
    onInputJudulAddChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 200) {
            this.setState({ inputJudulAdd: e.target.value })
        }
    }

    onInputDeskripsiAddChange = (e) => {
        this.setState({ inputDeskripsiAdd: e.target.value })
    }

  
    onTanggalBeritaAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalBeritaAdd: e.target.value })
    }

    onImageBeritaAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputImageBeritaAdd: e.target.value })
    }

    onInputJudulEditChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 200) {
            this.setState({ inputJudulEdit: e.target.value })
        }
    }

    onInputDeskripsiEditChange = (e) => {
        this.setState({ inputDeskripsiEdit: e.target.value })
    }


    onTanggalBeritaEditChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalBeritaEdit: e.target.value })
    }

    onImageBeritaEditChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputImageBeritaEdit: e.target.value })
    }

    onBtnAddClick = () => {
        axios.post(API_URL + '/berita/addberita', {
            judulBerita: this.state.inputJudulAdd,
            deskripsi: this.state.inputDeskripsiAdd,
            tanggalBerita: this.state.inputTanggalBeritaAdd,
            imageBerita :this.state.inputImageBeritaAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete(API_URL + '/berita/deleteberita/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    onBtnSaveUpdateClick = () => {
        axios.put(API_URL + '/berita/editberita/' + this.state.selectedEditId, {
            judulBerita: this.state.inputJudulEdit,
            deskripsi: this.state.inputDeskripsiEdit,
            tanggalBerita: this.state.inputTanggalBeritaEdit,
            imageBerita :this.state.inputImageBeritaEdit
        }).then(res => {
            this.getInitialData();
            this.setState({selectedEditId:0})
        }).catch(err => {
            console.log(err)
        })
    }


    renderListBerita = () => {
        return this.state.listBerita.map((item) => {
            if(item.id !== this.state.selectedEditId) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.judulBerita}</td>
                        <td>{item.deskripsi}</td>
                        <td>{moment(item.tanggalBerita).format('YYYY-MM-DD')}</td>
                        <td>
                            <img 
                                src={item.imageBerita}
                                style={{ width: '200px',height:'100px' }}
                            />
                        </td> 
                        <td>
                            <input 
                                type="button" className='btn btn-warning'
                                value="Edit" 
                                onClick={() => this.setState({ 
                                        selectedEditId: item.id,
                                        inputJudulEdit: item.judulBerita,
                                        inputDeskripsiEdit: item.deskripsi, 
                                        inputTanggalBerdiriEdit: moment(item.tanggalBerita).format('YYYY-MM-DD'),  
                                        inputImageBeritaEdit:item.imageBerita
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
                        <input type="text" value={this.state.inputJudulEdit} onChange={this.onInputJudulEditChange}  />
                    </td>
                    <td>
                        <textarea 
                            value={this.state.inputDeskripsiEdit} 
                            onChange={this.onInputDeskripsiEditChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="date"
                            value={this.state.inputTanggalBeritaEdit}
                            onChange={this.onTanggalBeritaEditChange}
                        />
                    </td>
                    <td>
                        <input type="text" value={this.state.inputImageBeritaEdit} onChange={this.onImageBeritaEditChange}  />
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
                    <h4 style={{marginTop:"150px",color:'black'}}>Manage Berita</h4>
                    <div className="table-responsive"> 
                        <table className="table table-striped">
                            <MDBTableHead color="elegant-color" style={{color:'white'}}>
                                <tr>
                                    <th>Id</th>
                                    <th>Judul Berita</th>
                                    <th>Deskripsi</th>
                                    <th>Tanggal Berdiri</th>
                                    <th>Image</th>
                                    <th colspan="3">Option</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody style={{color:'white',background:'black'}}>
                                {this.renderListBerita()}
                            </MDBTableBody>
                            <MDBTableFoot color="elegant-color">
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" value={this.state.inputJudulAdd} onChange={this.onInputJudulAddChange}  />
                                    </td>
                                    <td>
                                        <textarea 
                                            value={this.state.inputDeskripsiAdd} 
                                            onChange={this.onInputDeskripsiAddChange}
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            type="date"
                                            value={this.state.inputTanggalBeritaAdd}
                                            onChange={this.onTanggalBeritaAddChange}
                                        />
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.inputImageBeritaAdd} onChange={this.onImageBeritaAddChange}  />
                                    </td>
                                    <td colSpan='2'>
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

export default connect(mapStateToProps, { ubahPikachu })(ManageBerita);