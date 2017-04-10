'use strict'
import '../../style.css'
import './distribution.css'

import React from 'react'
import Helmet from 'react-helmet'
import list from './distributionList.json'

class Distribution extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='distribution-panel horizontal-center debug'>
        <Helmet title='mb. MyBook - 派發地點' />
        <h1 className='distribution-title font-helvetica font-size-32'>全城派發</h1>
        {list.map(city =>
          <div key={city.city}>
            <h1 className='city-title font-helvetica font-size-24'>{city.city}</h1>
            <div className='city-locations'>
              {city.locations.map(location =>
                <div key={location.address} className='location-panel col-xs-6'>
                  <p className='location-name font-helvetica font-size-15'>{location.name}</p>
                  <p className='location-address font-helvetica font-size-15'>{location.address}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Distribution
