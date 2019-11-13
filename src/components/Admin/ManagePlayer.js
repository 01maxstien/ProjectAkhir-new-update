import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../../actions';
import { API_URL } from '../../helpers/apiurl';
import { MDBTable, MDBTableBody, MDBTableHead,MDBInput } from 'mdbreact';

class ManagePlayer extends Component {
    state = { 
        listPlayer: [], 
        listPosisi: [],
        inputNamaAdd: '', 
        inputNomorPunggungAdd: 0,
        selectedPosisiAdd: 0,
        inputTanggalLahirAdd: moment().format('YYYY-MM-DD'),
        inputImagePlayerAdd:'',
        selectedEditId: 0,
        inputNamaEdit: '', 
        inputNomorPunggungEdit: '',
        selectedPosisiEdit: 0,
        inputNomorPunggungEdit: 0,
        inputTanggalLahirEdit: moment().format('YYYY-MM-DD'),
        inputImagePlayerEdit:0,
        selectedPlayer: { id: 0, nama: '' },
    }

    getInitialData = () => {
        axios.get(API_URL + '/player/getplayer')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listPlayer: res.data })
                axios.get(API_URL + '/posisiplayer/getposisiplayer')
                    .then((res) => {
                        console.log('ini list posisiplayer')
                        this.setState({ listPosisi: res.data, selectedEditId: 0 })
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
        if(e.target.value.length <= 100) {
            this.setState({ inputNamaAdd: e.target.value })
        }
    }

    onInputNomorPunggungAddChange = (e) => {
        this.setState({ inputNomorPunggungAdd: e.target.value })
    }

    onSelectPosisiPlayerAddChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedPosisiAdd: parseInt(e.target.value) })
    }

    onInputNomorPunggungAddChange = (e) => {
        this.setState({ inputNomorPunggungAdd: e.target.value })
    }

    onTanggalLahirAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalLahirAdd: e.target.value })
    }

    onInputImagePlayerAddChange = (e) => {
        this.setState({ inputImagePlayerAdd: e.target.value })
    }

    onInputNamaEditChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 100) {
            this.setState({ inputNamaEdit: e.target.value })
        }
    }

    onInputNomorPunggungEditChange = (e) => {
        this.setState({ inputNomorPunggungEdit: e.target.value })
    }

    onSelectPosisiPlayerEditChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedPlayerEdit: parseInt(e.target.value) })
    }

    onTanggalLahirEditChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalLahirEdit: e.target.value })
    }

    onInputImagePlayerEditChange = (e) => {
        this.setState({ inputImagePlayerEdit: e.target.value })
    }

    onBtnAddClick = () => {
        axios.post(API_URL + '/player/addplayer', {
            nama: this.state.inputNamaAdd,
            nomorPunggung: parseInt(this.state.inputNomorPunggungAdd),
            posisiId: this.state.selectedPosisiAdd,
            TanggalLahir: this.state.inputTanggalLahirAdd,
            imagePlayer :this.state.inputImagePlayerAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete(API_URL + '/player/deleteplayer/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    onBtnSaveUpdateClick = () => {
        axios.put(API_URL + '/player/editplayer/' + this.state.selectedEditId, {
            nama: this.state.inputNamaEdit,
            nomorPunggung: parseInt(this.state.inputNomorPunggungEdit),
            posisiId: this.state.selectedPosisiEdit,
            TanggalLahir: this.state.inputTanggalLahirEdit,
            imagePlayer :this.state.inputImagePlayerEdit
        }).then(res => {
            this.getInitialData();
        }).catch(err => {
            console.log(err)
        })
    }


    onBtnSelectPlayerClick = (player) => {
        this.setState({ selectedPlayer: player })
        this.getImageByPlayerId(player.id)
    }

    renderListPosisi = () => {
        return this.state.listPosisi.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.nama}</option>
            )
        })
    }

    renderListPlayer = () => {
        return this.state.listPlayer.map((item) => {
            if(item.id !== this.state.selectedEditId) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.nomorPunggung}</td>
                        <td>{moment(item.TanggalLahir).format('YYYY-MM-DD')}</td>
                        <td>{item.posisiPemain}</td>
                        <td>
                            <img 
                                src={item.imagePlayer}
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
                                        inputNomorPunggungEdit: item.nomorPunggung,
                                        inputTanggalLahirEdit: moment(item.TanggalLahir).format('YYYY-MM-DD'),
                                        inputImagePlayerEdit: item.imagePlayer,
                                        selectedPosisiEdit: item.posisiId
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
                        <input
                            type="number"
                            value={this.state.inputNomorPunggungEdit}
                            onChange={this.onInputNomorPunggungEditChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="date"
                            value={this.state.inputTanggalLahirEdit}
                            onChange={this.onTanggalLahirEditChange}
                        />
                    </td>
                    <td>
                        <select 
                            onChange={this.onSelectPosisiPlayerEditChange} 
                            value={this.state.selectedPosisiEdit}
                        >
                            <option value={0}>-- Pilih Posisi Pemain --</option>
                            {this.renderListPosisi()}
                        </select>
                    </td>
                    <td>
                        <input type="text" value={this.state.inputImagePlayerEdit} onChange={this.onInputImagePlayerEditChange}  />
                    </td>
                    
                    <td><input type="button" className='btn btn-primary' value="Cancel" onClick={() => this.setState({ selectedEditId: 0 })}/></td>
                    <td><input type="button" className='btn btn-success' value="Save" onClick={this.onBtnSaveUpdateClick} /></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <center>
                    <h4 style={{marginTop:"150px",color:'white'}}>Manage Player</h4>
                    <MDBTable style={{width:'50%'}}>
                        <MDBTableHead color="elegant-color" style={{color:'white'}}>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Nomor Punggung</th>
                                <th>Tanggal Lahir</th>
                                <th>Posisi</th>
                                <th>Image Player</th>
                                <th colspan="3">Option</th>
                            </tr>
                        </MDBTableHead>
                        <tbody style={{color:'white'}}>
                            {this.renderListPlayer()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" value={this.state.inputNamaAdd} onChange={this.onInputNamaAddChange}  />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={this.state.inputNomorPunggungAdd}
                                        onChange={this.onInputNomorPunggungAddChange}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="date"
                                        value={this.state.inputTanggalLahirAdd}
                                        onChange={this.onTanggalLahirAddChange}
                                    />
                                </td>
                                <td>
                                    <select onChange={this.onSelectPosisiPlayerAddChange}>
                                        <option value={0}>-- Pilih Posisi Pemain --</option>
                                        {this.renderListPosisi()}
                                    </select>
                                </td>

                                <td>
                                    <input type="text" value={this.state.inputImagePlayerAdd} onChange={this.onInputImagePlayerAddChange}  />
                                </td>
                               
                                <td>
                                    <input type="button" className='btn btn-primary' value="Add" onClick={this.onBtnAddClick} />
                                </td>
                                <td />
                                <td />
                            </tr>
                        </tfoot>
                    </MDBTable>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { actorPikachu: state.pikachu }
}

export default connect(mapStateToProps, { ubahPikachu })(ManagePlayer);