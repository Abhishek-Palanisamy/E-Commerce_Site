import React, { useEffect, useState } from 'react';
import '../Assests/CSS/RegisterTable.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar1 from '../Components/AdminNavbar1';

function CartTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://localhost/test/formGet4.php';
    axios.get(url)
      .then(response => response.data)
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []); 

  const deleteContact = (id, event) => {
    event.preventDefault();
    if (window.confirm("Are you sure want to delete?")) {
      axios({
        method: 'post',
        url: `http://localhost/test/formDelete4.php/?delete=${id}`
      })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            alert("Contact deleted successfully");
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    }
    window.location.reload();
  };

  return (
    <>
      <AdminNavbar1 />
      <div className='container'>
        <h2 className='mt-5 text-center'>Cart List</h2>
        <table className='table table-bordered table-striped mt-4'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Address</th>
              <th>Bill</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.uname}</td>
                <td>{user.emailid}</td>
                <td>{user.address}</td>
                <td>{user.bill}</td>
                <td>{user.totalquantity}</td>
                <td>{user.payment}</td>
                <td>
                <Link to='#' onClick={(event) => deleteContact(user.id, event)} className='btn btn-danger btn-xs'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
}

export default CartTable;
