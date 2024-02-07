import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/u5er/login', { emailAddress, password });

      console.log('Login response: ', response.data)

      const { role, fullName } = response.data;

      // Redirect based on user's role
      navigate(role === 'dean' ? '/dean/dashboard' : '/faculty/dashboard'); // Use navigate instead of history.push
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
      <div className='w-1/3'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_University_%40_Night.GIF/250px-The_University_%40_Night.GIF" alt="" className='w-full rounded-lg' />
      </div>

      <div className='w-1/3 flex justify-center items-center flex-col gap-7'>

        <div className='flex justify-center items-center gap-5 text-cyan-9500'>
          <FontAwesomeIcon icon={faBullhorn} className='text-4xl'/>
          <h2 className='text-4xl'><span className='font-semibold'>Announce</span><span className='font-bold'>Sync</span></h2>
        </div>

        <div>

          <div className="relative h-11 w-full min-w-[200px] mb-10">
            <input placeholder="@google.com"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              />
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>


          <div className="relative h-11 w-full min-w-[200px] mb-10">
            <input placeholder="******"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>

          <div>
          <Button type='button' onClick={handleLogin} className="relative px-8 py-2 rounded-md bg-transparent isolation-auto z-10 border-2 border-gray-500 min-w-[300px]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-gray-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-300  hover:text-yellow-50">Login</Button>
          </div>

        </div>
      </div>

    </div>
    </>

  );
};

export default LoginPage;
