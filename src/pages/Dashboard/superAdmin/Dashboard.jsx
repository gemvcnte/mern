import react, { useeffect } from 'react';
import Sidebar from '../../components/Sidebar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dashboard = () => {
  const navigate = useNavigate(); // use the usenavigate hook

  useeffect(() => {

    const fetchUserRole = async () => {
      try {
        const response = await axios.get('/api/u5er/login'); // adjust the endpoint to fetch user role
        const { role } = response.data;

        if (role === 'dean') {
          navigate('/dean/dashboard');
          console.log('test')
        } else {
          console.log("couldn't fetch");
        }
      } catch (error) {
        console.error('error fetching user role:', error);
      }
    };

    fetchUserRole(); // call the fetchuserrole function

  }, [navigate]); // include navigate in the dependency array to avoid linting warnings

  return (
    <div>
      <Sidebar />
      <div>Dashboard</div>
    </div>
  );
};

export default dashboard;

