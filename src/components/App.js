import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './headerpart/Header';
import Slider from './sliderpart/Slider';
import Notification from './notificationpart/notification';
import Features from './featurespart/featurespart';
import HRMmanagement from './hrmanagement/hrmanagement';
import EMpower from './EMpower/EMpower';
import Accountants from './accountants/accountants';
import Managementsystem from './managementsystem/managementsystem';
import Clientreview from './clientreview/clientreview';
import Bottomad from './bottomad/bottomad';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Slider/>
         <Notification/>
         <Features/>
         <HRMmanagement/>
         <EMpower/>
         <Accountants/>
         <Managementsystem/>
         <Clientreview/>
         <Bottomad/>
         <Footer/>
      </div>
    );
  }
}

export default App;
