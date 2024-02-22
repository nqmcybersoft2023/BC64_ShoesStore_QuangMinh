import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShoeListItem from './component/ExShoeStore/ShoeListItem';
import CartShoe from './component/ExShoeStore/CartShoe';
import ExShoeStore from './component/ExShoeStore/ExShoeStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <h1 className=' text-center mt-3'>Shoes Shop</h1>
    <ExShoeStore />
     
  </div>
);
