
import * as React from 'react';
import Box from '@material-ui/core/Box'
import'./Header.css';
import Halal from '../images/Halal.png';
import BPJPH from '../images/BPJPH.png';
const Header= () => {
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
        </>
    )
}
export default Header;