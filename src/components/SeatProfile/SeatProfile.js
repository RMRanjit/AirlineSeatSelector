import React from 'react'
import PropTypes from 'prop-types'

const SeatProfile = ({seat = {seatNumber: "1", 
                            row: "1", 
                            seatClass: "Economy", 
                            color: "white", 
                            seatColor: "white", 
                            price: Math.floor(Math.random() * 100),
                            description: "Standard Ecomomy class Seat with Minimum recline",
                        }}) => {

  return (
    <div style={{backgroundColor:"white", color:"black", minWidth:"300px", padding: 0, margin: 0}}>
        <div style={{flexDirection:"row", padding: 0, margin: 0}}>
            <div style={{fontSize:"1em", backgroundColor: "almondblanch"}}>Seat Number</div>
            <div>Name</div>
            <div style={{fontSize:"1.5em"}}>${seat.price}</div>
    </div>
          
    </div>
  )
}

SeatProfile.propTypes = {}

export default SeatProfile;