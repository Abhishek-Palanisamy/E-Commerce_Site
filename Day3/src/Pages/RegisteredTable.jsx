import React, { useEffect, useState } from 'react';
import '../Assests/CSS/RegisterTable.css';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisteredTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://localhost/test/formGet.php';
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
        url: `http://localhost/test/formDelete.php/?delete=${id}`
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
      <Navbar1 />
      <div className='container'>
        <h2 className='mt-5 text-center'>User Registration List</h2>
        <table className='table table-bordered table-striped mt-4'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.uname}</td>
                <td>{user.mobileno}</td>
                <td>{user.emailid}</td>
                <td>
                <Link to='#' onClick={(event) => deleteContact(user.id, event)} className='btn btn-danger btn-xs'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default RegisteredTable;
