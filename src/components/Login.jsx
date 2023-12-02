import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = ({ setLoginUSer }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
    // Add your login logic here (e.g., API call, validation, etc.)
    console.log('Form submitted:', user);
  };
  const login = () => {
    axios
      .post('http://localhost:9003/Login', user)
      .then((res) => {
        alert(res.data.message);

        setLoginUSer(res.data.existingUser);
        // window.location.href = '/';
        navigate('/');
      })
      .catch((err) => console.error('Error during login:', err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="md:max-w-[480px] lg:w-[480px] w-[350px] mx-auto bg-gray-900 h-[560px] md:h-[600px] mt-20 p-4 text-white rounded">
          <div className="text-2xl font-semibold ml-14 mt-10">Sign in</div>
          <div>
            <input
              className="w-[250px] md:w-[320px] px-4 py-3 mt-12 ml-9 md:ml-14 bg-gray-700 rounded"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email or phone number"
            />
            <br />
            <input
              className="w-[250px] md:w-[320px] px-4 py-3 mt-4 ml-9 md:ml-14 bg-gray-700 rounded"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <br />
            <button
              className="w-[250px] md:w-[320px] px-4 py-3 mt-10 ml-9 md:ml-14 font-semibold bg-red-600 rounded"
              onClick={login}
            >
              Sign in
            </button>
            <br />
            <label>
              <input
                className="max-w-[320px] mt-6  ml-14"
                type="checkbox"
                name="subscribe"
                checked
              />
              <span className="text-gray-400 text-sm mr-8  md:mr-36">
                Remember me
              </span>
              <span className="text-gray-400 text-sm ">Need help?</span>
            </label>
          </div>
          <div className=" ml-14 mt-5 md:mt-16 text-gray-400">
            New to Netflix?
            <Link to="/Register">
              <button type="button" className="font-semibold text-white ml-2">
                Sign up now
              </button>
            </Link>
          </div>
          <div className="text-sm ml-14 mt-4 text-gray-400">
            <p>
              Sign in is protected by Google reCAPTCHA to ensure <br /> you’re
              not a bot.
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
