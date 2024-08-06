import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Headerr() {
  return (
    <div><MDBNavbar light bgColor='info'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://i.pinimg.com/originals/07/99/0d/07990de3a791c7330131934bc546ad25.gif'
          height='30'
          alt=''
          loading='lazy'
        />
        <h4 style={{color:'red'}}>Show-Hide App</h4>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
      
    </div>
  )
}

export default Headerr

