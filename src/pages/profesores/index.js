import { useEffect, useState } from 'react';

// material-ui
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ant-design/icons
import { PlusOutlined } from '@ant-design/icons';

// react-router-dom
import { Link } from 'react-router-dom';

// components
import ProfesorActions from './components/profesorActions';

const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI;

const Profesor = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/teacher');
        if (response.ok) {
          const data = await response.json();
          setRows(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/profesores/create">
          <PlusOutlined style={{ marginRight: 5 }} /> AÑADIR PROFESOR
        </Button>
      </Grid>
      <MainCard title="Profesores">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>DOCUMENTO</TableCell>
                  <TableCell align="right">NOMBRE</TableCell>
                  <TableCell align="right">APELLIDO</TableCell>
                  <TableCell align="right">DIRECCIÓN</TableCell>
                  <TableCell align="right">EDAD</TableCell>
                  <TableCell align="right">ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.document}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">
                      <ProfesorActions profesorId={row.document} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Profesores;
