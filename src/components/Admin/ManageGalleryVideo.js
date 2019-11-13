import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../../actions';
import { API_URL } from '../../helpers/apiurl';
import { MDBTable, MDBTableBody, MDBTableHead,MDBTableFoot } from 'mdbreact';

class ManageGalleryVideo extends Component {
    state = { 
        listGalleryVideo: [], 
        inputVideoAdd: '', 
        inputTanggalVideoAdd: moment().format('YYYY-MM-DD'), 
        selectedGalleryVideo: { id: 0, urlVideo: '' },
    }

    getInitialData = () => {
        axios.get(API_URL + '/galleryVideo/getVideo')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listGalleryVideo: res.data })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    componentDidMount() {
        this.props.ubahPikachu('Ryan Gosling')
        this.getInitialData()
    }

    onInputVideoAddChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <=200) {
            this.setState({ inputVideoAdd: e.target.value })
        }
    }
  
    onTanggalVideoAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalVideoAdd: e.target.value })
    }

    onBtnAddClick = () => {
        axios.post(API_URL + '/galleryVideo/addVideo', {
            urlVideo: this.state.inputVideoAdd,
            tanggalUpload: this.state.inputTanggalVideoAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete(API_URL + '/galleryVideo/deleteVideo/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

  


    renderListVideo = () => {
        return this.state.listGalleryVideo.map((item) => {
            if(item.id !== this.state.selectedGalleryVideo) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.urlVideo}</td>
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
                    <h4 style={{marginTop:"150px"}}>Manage Gallery Video</h4>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <MDBTableHead color="elegant-color" style={{color:'white'}}>
                                <tr>
                                    <th>Id</th>
                                    <th>urlVideo</th>
                                    <th>Tanggal Upload</th>
                                    <th colspan="1">Option</th>
                                </tr>
                            </MDBTableHead>
                            <tbody style={{color:'white',background:'black'}}>
                                {this.renderListVideo()}
                            </tbody>
                            <MDBTableFoot color="elegant-color">
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" value={this.state.inputVideoAdd} onChange={this.onInputVideoAddChange}  />
                                    </td>
                                    <td>
                                        <input 
                                            type="date"
                                            value={this.state.inputTanggalVideoAdd}
                                            onChange={this.onTanggalVideoAddChange}
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

export default connect(mapStateToProps, { ubahPikachu })(ManageGalleryVideo);