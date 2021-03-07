import React,{ Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render () {
    
    return (
      <div>
        <Header></Header>
      
          <div className="item">
          <div className="item__contact col-md-6 col-lg-3">
            <div class="form-group">
              <h4>ĐẶT HẸN KHÁM ONLINE</h4>
              <label for=""></label>
              <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
              
            </div>
          </div>
          <div className="item__contact col-md-6 col-lg-3">
            <h4>THÔNG TIN LIÊN HỆ</h4>
          </div>
          <div className="item__contact col-md-6 col-lg-3">
            <h4>THỜI GIAN LÀM VIỆC</h4>
          </div>

      
          
        </div>
        <Footer></Footer>
      </div>
    )

  };
}

export default App;
