import { useState, useEffect } from 'react';
// project imports
import profesorForm from './components/profesorForm';
import { LinearProgress } from '@mui/material';
// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { profesorId } = useParams();

  const [profesor, setProfesor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/profesor/${profesorId}`);
        if (response.ok) {
          const data = await response.json();
          setProfesor(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [profesorId]);

  if (!profesor) {
    return <LinearProgress />;
  }

  return <ProfesorForm profesor={profesor} isEdit />;
};

export default Edit;
