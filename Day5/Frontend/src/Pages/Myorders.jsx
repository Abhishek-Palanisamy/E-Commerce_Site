import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../Assests/CSS/Myorder.css'
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';



function Myorders() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

 

 
  return (
    <>
      <Navbar1 />
      <div className="space1">
        <div class="odetails-1">
          <div className="space">
          <p>
          <b>Username</b>
            </p>
            <p>{username}</p>
          </div>
          </div>
          </div>
          
              <i class="fa fa-trash" style={{fontSize:"large",cursor:"pointer",marginLeft:"78%"}} />
              <div class="container-Myorders
            ">
              <div class="card-container">
              <div className="bk">
              <h4 className="bkinvoice">Invoice No : </h4>
            </div>
                <div class="card">
                <div class="parent">
                    <div class="content">
                      <div class="details-2">
                      <p>Item Name :</p>
                      <b>Total Quantity : </b>
                      <br/>
                      <b>Total Price : </b>
                      </div>
                      </div>
                    <div class="status">
                    <div class="sec1">
                    <p>Payment Status</p>
                    <h2></h2>
                    </div>
                    
                   
                        </div>
                        </div>
                        </div>
                        <hr />
                        </div>
                        </div>
    

      <Footer />
    </>
  );
}

export default Myorders;