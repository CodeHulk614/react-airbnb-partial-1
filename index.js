import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Card from "./Card"
import Data from "./Data"
import Top from './Top'
import Filter from './Filter'
import Footer from './Footer'
import './css/ionicons.min.css'
import './css/style.css'

function App(){
  let school = Data.map(item=> {
    return(
      <div className="col-sm-3">
        <Card
        key={item.id}
        schoolImg={item.schoolImg}
        schoolName={item.schoolName}
        aboutSchool={item.aboutSchool}
        />
      </div>
    )
  })
  return(
    <div>
      <Header />
      <Top />
      <Filter />
      <div className="container mt-4">
        <div className="row">
          {school}
        </div>
      </div>
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


