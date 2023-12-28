import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    id: '',
    uname: '',
    mobileno: '',
    emailid: '',
    address: '',
  });

  const uname = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`http://localhost/test/formGet1.php?uname=${uname}`)
      .then((response) => {
        console.log('Response data:', response.data); // Log the response data
        const fetchedData = response.data[0]; // Assuming you expect only one user
        console.log('Fetched data:', fetchedData); // Log the fetched data
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
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container">
      <h1 className="page-header text-center">Update Contact</h1>
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={userData.id} />

              <label>Name</label>
              <input
                type="text"
                name="uname"
                className="form-control"
                value={userData.uname}
                onChange={handleChange}
              />

              <label>Email</label>
              <input
                type="email"
                name="emailid"
                className="form-control"
                value={userData.emailid}
                onChange={handleChange}
              />

              <label>Mobile No</label>
              <input
                type="text"
                name="mobileno"
                className="form-control"
                value={userData.mobileno}
                onChange={handleChange}
              />

              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={userData.address}
                onChange={handleChange}
              />

              <br />
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Update Contact"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
