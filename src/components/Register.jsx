import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call, validation, etc.)
    console.log('Form submitted:', user);
  };
  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post('http://localhost:9003/Register', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    } else {
      alert('Invalid input');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="md:max-w-[480px] lg:w-[480px] w-[350px] mx-auto bg-gray-900 h-[560px] md:h-[600px] mt-20 p-4 text-white rounded">
          <div className="text-2xl font-semibold ml-14 mt-10">Sign up</div>
          <div>
            <input
              className="w-[250px] md:w-[320px] px-4 py-3 mt-4 ml-9 md:ml-14 bg-gray-700 rounded"
              type="text"
              name="name"
              value={user.name}
              placeholder="Username"
              onChange={handleChange}
            />
            <br />
            <input
              className="w-[250px] md:w-[320px] px-4 py-3 mt-4 ml-9 md:ml-14 bg-gray-700 rounded"
              type="text"
              name="email"
              value={user.email}
              placeholder="Email or phone number"
              onChange={handleChange}
            />
            <br />
            <input
              className="w-[250px] md:w-[320px] px-4 py-3 mt-4 ml-9 md:ml-14 bg-gray-700 rounded"
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            <button
              className="w-[250px] md:w-[320px] px-4 py-3 mt-10 ml-9 md:ml-14 font-semibold bg-red-600 rounded "
              onClick={register}
            >
              Sign up
            </button>
            <br />
            <label>
              <input
                className="max-w-[320px] mt-6  ml-9 md:ml-14"
                type="checkbox"
                name="subscribe"
                checked
              />
              <span className="text-gray-400 text-sm   mr-8  md:mr-36">
                Remember me
              </span>
              <span className="text-gray-400 text-sm ">Need help?</span>
            </label>
          </div>
          <div className=" ml-14 mt-5 md:mt-16 text-gray-400">
            Already in Netflix?
            <Link to="/Login">
              <button type="button" className="font-semibold text-white ml-2">
                Sign in now
              </button>
            </Link>
          </div>
          <div className="text-sm ml-14 mt-4 text-gray-400">
            <p>
              Sign up is protected by Google reCAPTCHA to ensure <br /> you’re
              not a bot.
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
