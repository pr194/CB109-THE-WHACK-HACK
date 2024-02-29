import React from 'react'
import './cities.css'
const SubCity = ({ value }) => {
    return (
        <div>
            <div className='main'>
                <div className='card'>
                    <div className='Chead'>
                        <img className="img" src={value.link} alt='image' />
                    </div>
                    <div className='Cbody'>
                        <h3>{value.name}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SubCity