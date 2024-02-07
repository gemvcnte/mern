import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const LoginPage = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/u5er/login', { emailAddress, password });

      const { role } = response.data;

      // Redirect based on user's role
      navigate(role === 'dean' ? '/dean/dashboard' : '/admin/dashboard'); // Use navigate instead of history.push
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <div className='w-full flex  '>
        <div className='w-8/12'>
          <img src={''} alt="hero" />
         
        </div>

        
      <div className=' w-40 flex justify-center flex-col'>
        <Input
        type="email"
        placeholder="Email"
        className="w-1/8"
        name="emailAddress"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        className="w-1/8"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button className="my-4" type="button" onClick={handleLogin}>
        Login
      </Button>

        
      </div>
    </div>
  </div>

  );
};

export default LoginPage;
