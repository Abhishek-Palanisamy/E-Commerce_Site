import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import Navbar1 from '../Components/Navbar1';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState({
    id: '',
    uname: '',
    mobileno: '',
    emailid: '',
    address: '',
  });
  const nav=useNavigate('');
  const uname = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`http://localhost/test/formGet1.php?uname=${uname}`)
      .then((response) => {
        const fetchedData = response.data[0];
        setUserData(fetchedData);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('id', userData.id);
    formData.append('uname', userData.uname);
    formData.append('emailid', userData.emailid);
    formData.append('mobileno', userData.mobileno);
    formData.append('address', userData.address);

    axios({
      method: 'post',
      url: `http://localhost/test/formUpdate.php/?id=${userData.id}`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert('Contact updated successfully.');
          nav("/");
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <Navbar1 />
      <div className="container mt-5">
        <h1 className="page-header text-center mb-2 text-black">Profile</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="id" value={userData.id} />

                  <div className="mb-3 text-black fw-bold">
                    <label htmlFor="uname" className="form-label">Name</label>
                    <input
                      type="text"
                      name="uname"
                      className="form-control ms-3 mt-1 "
                      value={userData.uname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 text-black fw-bold">
                    <label htmlFor="emailid" className="form-label">Email</label>
                    <input
                      type="email"
                      name="emailid"
                      className="form-control ms-3 mt-1 "
                      value={userData.emailid}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 text-black fw-bold">
                    <label htmlFor="mobileno" className="form-label">Mobile No</label>
                    <input
                      type="text"
                      name="mobileno"
                      className="form-control ms-3 mt-1 "
                      value={userData.mobileno}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 text-black fw-bold">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control ms-3 mt-1 "
                    value={userData.address}
                    onChange={handleChange}
                  />
                </div>

                  <div className="mb-3 text-black fw-bold">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="Update Contact"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
