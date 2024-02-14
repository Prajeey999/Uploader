import React from 'react';
import Button from '@mui/material/Button';
import './buttons.css'
function Buttons() {
    return (
        <div className='buttons_holders'>
            <form>
            <input type="file" id="myFile" name="filename"></input>
            </form>
              <Button variant="outlined">Outlined</Button>
              <Button variant="contained">Contained</Button>
        </div>
    );
}

export default Buttons;
