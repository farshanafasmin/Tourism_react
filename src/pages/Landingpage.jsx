
import React from 'react'
import Button from 'react-bootstrap/Button';

function landingpage() {
  return (
    <div className='wrapper'>
        <h1 className='head'>EXPLORE THE WORLD</h1>
        <div className="button-container">
        <Button variant="light">BOOK</Button>{' '}
        <Button variant="light">DISCOVER NOW</Button>{' '}
      </div>

    </div>


  )
}

export default landingpage