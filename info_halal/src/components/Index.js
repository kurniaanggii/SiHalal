import * as React from 'react';
import './Index.css'
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Halal from '../images/Halal.png';
import BPJPH from '../images/BPJPH.png';
import background_1 from '../images/background_1.png';
const Index = () => {
return (
        <>
        <div class="kanan">
       <h1>Pencarian Sertifikat Halal</h1>
       <p class="teks1">Temukan data dan informasi tentang sertifikat halal yang telah <br/>diterbitkan oleh Badan Penyelenggara Jaminan Produk Halal (BPJPH)</p>
       <Container maxWidth="sm">
        <p> Pencarian dapat dilakukan dengan menggunakan beberapa filter untuk mempersempit pencarian.</p>
        <p>Filter</p>
        <Box
      component="form"
      sx={{
        m: 20, width: '150px' ,xs: 50, md:50,
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="fullWidth" label="Pilih jenis produk" variant="outlined" />
    <TextField id="fullWidth" label="Masukan Nama Pelaku Usaha" variant="outlined" />
    <TextField id="fullWidth" label="Masukan Nama Produk" variant="outlined" />
    <TextField id="fullWidth" label="Pilih Provinsi" variant="outlined" />
    <TextField id="fullWidth" label="Pilihlah skala usaha" variant="outlined" />
    </Box>
        </Container>
        </div>
        </>
)
}
export default Index;