import React from 'react'
import PropTypes from 'prop-types'
import "./UserProfile.css"
import { faker } from '@faker-js/faker';
import StarRatings from "react-star-ratings"

const UserProfile = ({user={profilePic:faker.image.avatar(), 
                            fullName:faker.name.fullName(),
                            city: faker.address.cityName(),
                            state: faker.address.state(),
                            jobType: faker.name.jobTitle(),
                            catchPhrase: faker.company.catchPhrase(),
                            profile: faker.helpers.createCard(),
                            rating: Math.floor(Math.random() * 6), // Generate a Random number between 0 and 5
}}) => {

  return (
    <div style={{backgroundColor:"white"}}>
        <div className="col-md-4 animated fadeIn" >
            <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={user.profilePic}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                  {user.fullName}
                  </h5>
                 
                  <p className="card-text">
                  {user.jobType}
                    <br />
                    <span className="phone">{user.catchPhrase}</span>
                  </p>
                <div className="card-text">Rating
                    <StarRatings
                        rating={user.rating}
                        starRatedColor="blue"
                        numberOfStars={5}
                        name='rating'
                        starDimension="10px"
                        starSpacing="1px"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

UserProfile.propTypes = {}

export default UserProfile