import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../../actions';
import { API_URL } from '../../helpers/apiurl';
import { MDBTable, MDBTableBody, MDBTableHead,MDBInput,MDBTableFoot } from 'mdbreact';

class ManageMatch extends Component {
    state = { 
        listMatch: [], 
        listTim: [],
        inputTanggalMatchAdd: moment().format('YYYY-MM-DD'),
        inputImageTimHomeAdd:'',
        inputImageTimAwayAdd:'',
        inputSkorHomeAdd: 0,
        inputSkorAwayAdd: 0,
        selectedTimHomeAdd: 0,
        selectedTimAwayAdd: 0,
        selectedTimHomeEdit: 0,
        selectedTimAwayEdit: 0,
        selectedEditId: 0,
        inputTanggalMatchEdit: moment().format('YYYY-MM-DD'),
        inputImageTimHomeEdit:'',
        inputImageTimAwayEdit:'',
        inputSkorHomeEdit: 0,
        inputSkorAwayEdit: 0,
        selectedMatch: { id: 0}
    }

    getInitialData = () => {
        axios.get(API_URL + '/match/getmatch')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listMatch: res.data })
                axios.get(API_URL + '/tim/gettim')
                    .then((res) => {
                        console.log('ini list Tim')
                        this.setState({ listTim: res.data, selectedEditId: 0 })
                    }).catch((err) => {
                        console.log(err.response)
                    })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }
    

    componentDidMount() {
        this.getInitialData()
    }

//======================================FUNCTION ADD=================================================
    onTanggalMatchAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalMatchAdd: e.target.value })
    }

    // onSelectTimAddChange = (e) => {
    //     console.log(e.target.value)
    //     this.setState({ selectedTimAdd: parseInt(e.target.value) })
    // }
    onSelectTimHomeAddChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedTimHomeAdd: parseInt(e.target.value) })
    }

    onSelectTimAwayAddChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedTimAwayAdd: parseInt(e.target.value) })
    }

    onInputSkorHomeAddChange = (e) => {
        this.setState({ inputSkorHomeAdd: e.target.value })
    }

    onInputSkorAwayAddChange = (e) => {
        this.setState({ inputSkorAwayAdd: e.target.value })
    }

    onInputImageTimHomeAddChange=(e)=>{
        this.setState({inputImageTimHomeAdd:e.target.value})
    }

    onInputImageTimAwayAddChange=(e)=>{
        this.setState({inputImageTimAwayAdd:e.target.value})
    }
//===========================================================================================================
//=========================FUNCTION EDIT=====================================================================

    onTanggalMatchEditChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalMatchEdit: e.target.value })
    }
    onSelectTimHomeEditChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedTimHomeEdit: parseInt(e.target.value) })
    }
    onSelectTimAwayEditChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedTimAwayEdit: parseInt(e.target.value) })
    }
    // onSelectTimEditChange = (e) => {
    //     console.log(e.target.value)
    //     this.setState({ selectedTimEdit: parseInt(e.target.value) })
    // }

    onInputSkorHomeEditChange = (e) => {
        this.setState({ inputSkorHomeEdit: e.target.value })
    }

    onInputSkorAwayEditChange = (e) => {
        this.setState({ inputSkorAwayEdit: e.target.value })
    }

    onInputImageTimHomeEditChange=(e)=>{
        this.setState({inputImageTimHomeAdd:e.target.value})
    }

    onInputImageTimAwayEditChange=(e)=>{
        this.setState({inputImageTimAwayEdit:e.target.value})
    }
//===================================================================================

    onBtnAddClick = () => {
        axios.post(API_URL + '/match/addmatch', {
            tanggalMatch: this.state.inputTanggalMatchAdd,
            idTimHome: this.state.selectedTimHomeAdd,
            imageTimHome: this.state.inputImageTimHomeAdd,
            skorHome: parseInt(this.state.inputSkorHomeAdd),
            skorAway:parseInt(this.state.inputSkorAwayAdd),
            imageTimAway:this.state.inputImageTimAwayAdd,
            idTimAway: this.state.selectedTimAwayAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete(API_URL + '/match/deletematch/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    onBtnSaveUpdateClick = () => {
        axios.put(API_URL + '/match/editmatch/' + this.state.selectedEditId, {
            tanggalMatch: this.state.inputTanggalMatchEdit,
            idTimHome: this.state.selectedTimHomeEdit,
            imageTimHome: this.state.inputImageTimHomeEdit,
            skorHome: parseInt(this.state.inputSkorHomeEdit),
            skorAway:parseInt(this.state.inputSkorAwayEdit),
            imageTimAway:this.state.inputImageTimAwayEdit,
            idTimAway: this.state.selectedTimAwayEdit
        }).then(res => {
            this.getInitialData();
        }).catch(err => {
            console.log(err)
        })
    }

    renderListTim = () => {
        return this.state.listTim.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.NamaTim}</option>
            )
        })
    }

    renderListMatch = () => {
        return this.state.listMatch.map((item) => {
            if(item.id !== this.state.selectedEditId) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{moment(item.tanggalMatch).format('YYYY-MM-DD')}</td>
                        <td>{item.TimHome}</td>
                        <td>
                            <img 
                                src={item.imageTimHome}
                                style={{ width: '200px',height:'100px' }}
                            />
                        </td>
                        <td>{item.skorHome}</td>
                        <td>{item.skorAway}</td>
                        <td>
                            <img 
                                src={item.imageTimAway}
                                style={{ width: '200px',height:'100px' }}
                            />
                        </td>
                        <td>{item.TimAway}</td>
                        
                        <td>
                            <input 
                                type="button" className='btn btn-warning' 
                                value="Edit" 
                                onClick={() => this.setState({ 
                                        selectedEditId: item.id,
                                        inputTanggalMatchEdit: moment(item.tanggalMatch).format('YYYY-MM-DD'),
                                        selectedTimHomeEdit: item.idTimHome,
                                        inputImageTimHomeEdit:item.imageTimHome,
                                        inputSkorHomeEdit: item.skorHome,
                                        inputSkorAwayEdit:item.skorAway,
                                        inputImageTimAwayEdit:item.imageTimAway,
                                        selectedTimAwayEdit: item.idTimAway
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
                        <input 
                            type="date"
                            value={this.state.inputTanggalMatchEdit}
                            onChange={this.onTanggalMatchEditChange}
                        />
                    </td>
                    <td>
                        <select 
                            onChange={this.onSelectTimHomeEditChange} 
                            value={this.state.selectedTimHomeEdit}
                        >
                            <option value={0}>-- Pilih Tim Home --</option>
                            {this.renderListTim()}
                        </select>
                    </td>
                    <td>
                        <input type="text" value={this.state.inputImageTimHomeEdit} onChange={this.onInputImageTimHomeEditChange}  />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={this.state.inputSkorHomeEdit}
                            onChange={this.onInputSkorHomeEditChange}
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={this.state.inputSkorAwayEdit}
                            onChange={this.onInputSkorHomeAwayChange}
                        />
                    </td>
                    <td>
                        <input type="text" value={this.state.inputImageTimAwayEdit} onChange={this.onInputImageTimAwayEditChange}  />
                    </td>
                    <td>
                        <select 
                            onChange={this.onSelectTimAwayEditChange} 
                            value={this.state.selectedTimAwayEdit}
                        >
                            <option value={0}>-- Pilih Tim Away --</option>
                            {this.renderListTim()}
                        </select>
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
                    <h4 style={{marginTop:"150px",color:'Black'}}>Manage Match</h4>
                    <MDBTable style={{width:'50%'}}>
                        <MDBTableHead color="elegant-color" style={{color:'white'}}>
                            <tr>
                                <th>Id</th>
                                <th>Tanggal Match</th>
                                <th>Tim Home</th>
                                <th>ImageTimHome</th>
                                <th>SkorHome</th>
                                <th>SkorAway</th>
                                <th>ImageTimAway</th>
                                <th>Tim Away</th>
                                <th colspan="3">Option</th>
    
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody style={{color:'black'}}>
                            {this.renderListMatch()}
                        </MDBTableBody>
                        <MDBTableFoot color="elegant-color" style={{color:'white'}}>
                            <tr>
                                <td></td>
                                <td>
                                    <input 
                                        type="date"
                                        value={this.state.inputTanggalMatchAdd}
                                        onChange={this.onTanggalMatchAddChange}
                                    />
                                </td>
                                <td>
                                    <select onChange={this.onSelectTimHomeAddChange}>
                                        <option value={0}>-- Pilih Tim Home --</option>
                                        {this.renderListTim()}
                                    </select>
                                </td>
                                <td>
                                    <input type="text" value={this.state.inputImageTimHomeAdd} onChange={this.onInputImageTimHomeAddChange}  />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={this.state.inputSkorHomeAdd}
                                        onChange={this.onInputSkorHomeAddChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={this.state.inputSkorAwayAdd}
                                        onChange={this.onInputSkorAwayAddChange}
                                    />
                                </td>
                                <td>
                                    <input type="text" value={this.state.inputImageTimAwayAdd} onChange={this.onInputImageTimAwayAddChange}  />
                                </td>
                                <td>
                                    <select onChange={this.onSelectTimAwayAddChange}>
                                        <option value={0}>-- Pilih Tim Away --</option>
                                        {this.renderListTim()}
                                    </select>
                                </td>
                                <td colspan="2">
                                    <input type="button" className='btn btn-primary' value="Add" onClick={this.onBtnAddClick} />
                                </td>
                                
                            </tr>
                        </MDBTableFoot>
                    </MDBTable>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { actorPikachu: state.pikachu }
}

export default connect(mapStateToProps, { ubahPikachu })(ManageMatch);