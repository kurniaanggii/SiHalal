import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Halal from '../images/Halal.png';
import BPJPH from '../images/BPJPH.png';
import background_1 from '../images/background_1.png';
import './Tes.css'

const Tes = () => {
  return (
    <>
     <Box sx={{
        sm:50,
        md:50,
        padding:'50x',
       }} >
        <div class="row">
            <div className="column">
                 <img src={BPJPH} alt='logo' />
            </div>
            <div className="column1">
                <img src={Halal} alt='logo-2'  />
            </div>
          </div>
          </Box>
    <div className='body-container'>
        <section className='left-side'>
        <h1>Pencarian Sertifikat Halal</h1>
       <p class="teks1">Temukan data dan informasi tentang sertifikat halal yang telah <br/>diterbitkan oleh Badan Penyelenggara Jaminan Produk Halal (BPJPH)</p>
        </section>
        <section className='right-side'>
        <div className='card-form'>
        <p class="color"> Pencarian dapat dilakukan dengan menggunakan beberapa filter untuk mempersempit pencarian.</p>
        <br/>
        <p>Filter</p>
        <br/>
        <form className='filter-box'>
            <select name="produk" id="Produk" placeholder='pilih jenis produk'>
            <option value="" disabled selected>Select your option</option>
            <option value="javascript">Susu dan Analognya</option>
            <option value="python">Minuman Dengan Pengolahan</option>
         
            </select>
            <input
                type='text'
                placeholder='Masukan Nama Pelaku Usaha'
            />
            <input
                type='text'
                placeholder='Masukan Nama Produk'
            />
            <input
                type='text'
                placeholder='Pilih Provinsi'
            />
            <input
                type='text'
                placeholder='Pilihlah skala usaha'
            />
  
            <button type="submit" className="cari">
									Cari
			</button>
        </form>
        </div>
        </section>
    </div>
    <div className="main-footer">
                    <div className="col1">
                        <p > 
                            &copy; Copyright BPJPH 2022 | All Right Reserved 
                        </p>
                    </div>
          </div>
        </>
  )
}

export default Tes;