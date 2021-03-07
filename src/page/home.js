import React,{ Component } from 'react';
import './assets/home.css'
import './assets/phone.css'
import Header from '../components/Header';
import Carsousel from '../components/Carsousel'
import FrmDatLich from '../components/frmDatLich';
import Services from '../components/Services';
import Post from '../components/Post';
import Footer from '../components/Footer';
import Sercal from '../components/SerCal';


class Home extends Component {
  render () {
    return (
      <div className="body">
        <Header></Header>
        <Carsousel></Carsousel>
        <div className="container">
          <FrmDatLich></FrmDatLich> 
        </div>
        <Services></Services>
        <Sercal></Sercal>
        <Post></Post>
        <Footer></Footer>
      </div>
    )

  };
}

export default Home;
