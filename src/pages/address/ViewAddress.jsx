import React from 'react'
import { useSelector } from 'react-redux'

const ViewAddress = () => {
    const savedAddresses = useSelector(state => state.address);
    
  return (
      <div className="saved-address" id='savedaddress'>
          <h2>Saved Address</h2>
            {/* {savedAddresses.name} */}
          {savedAddresses.map((item, index) => (
              <div key={index}>
                  {item.name}
              </div>
          ))}
      </div>
  )
}

export default ViewAddress