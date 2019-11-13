import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from './components/Admin/admin'
import Home from './components/Home/Home';
import Header from './components/Navbar/Header';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import WaitingEmailVerification from './components/Auth/WaitingEmailVerification';
import EmailVerified from './components/Auth/EmailVerified';
import { checkKeepLogin } from './actions';
import Footer from './components/Navbar/Footer';
import Auth from './components/Auth/Auth';
import ManageProduct from './components/Admin/ManageProduct'
import ManageBerita from './components/Admin/ManageBerita'
import ManageGalleryFoto from './components/Admin/ManageGalleryFoto'
import ManageGalleryVideo from './components/Admin/ManageGalleryVideo';
import ManagePlayer from './components/Admin/ManagePlayer';
import ManageMatch from './components/Admin/ManageMatch';
import Berita from './components/Berita/Berita'
import Player from './components/Player/Player'
import Tim from './components/Tim/Profile'
import GalleryFoto from './components/Gallery/GalleryFoto'
import GalleryVideo from './components/Gallery/GalleryVideo'
import BeritaDetails from './components/Berita/BeritaDetails'
import Store from './components/Store/Store'
import ProductDetails from './components/Product/ProductDetails'
import Cart from './components/Cart/Cart'
import Schedule from './components/Schedule/Schedule'
import MatchDetails from './components/Match/MatchDetails'


class App extends Component {
  componentDidMount() {
    var token = localStorage.getItem('token')
    console.log(token)
    this.props.checkKeepLogin(token)
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/auth" component={Auth} />
          <Route path="/berita" component={Berita} />
          <Route path="/berita-details/:id" component={BeritaDetails} />
          <Route path="/player" component={Player} />
          <Route path="/tim" component={Tim} />
          <Route path="/galleryfoto" component={GalleryFoto} />
          <Route path="/galleryvideo" component={GalleryVideo} />
          <Route path="/store" component={Store} />
          <Route path="/cart" component={Cart} />
          <Route path="/product-details/:id" component={ProductDetails} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/match-details/:id" component={MatchDetails} />
          <Route path="/waitingemailverification" component={WaitingEmailVerification} />
          <Route path="/emailverified" component={EmailVerified} />
          <Route path="/manageProduct" component={ManageProduct} />
          <Route path="/manageBerita" component={ManageBerita} />
          <Route path="/manageGalleryFoto" component={ManageGalleryFoto} />
          <Route path="/manageGalleryVideo" component={ManageGalleryVideo} />
          <Route path="/managePlayer" component={ManagePlayer} />
          <Route path="/manageMatch" component={ManageMatch} />
        </div>
       <Footer/>
      </div>
    )
  }
}

export default connect(null, { checkKeepLogin })(App);