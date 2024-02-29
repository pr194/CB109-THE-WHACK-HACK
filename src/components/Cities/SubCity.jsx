import React from 'react'
import './cities.css'
const SubCity = ({ value }) => {
    return (
        <div>
            <a href={`/cities/${value.name}`}>
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
            </a>
        </div>

    )
}

export default SubCity