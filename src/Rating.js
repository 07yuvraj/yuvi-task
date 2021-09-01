import React from 'react'
import propTypes from 'prop-types'


const Rating = ({ rating, color }) => {
    return (
        <div className='rating'>
            <span>
                <i style={{ color }} className={rating >= 1 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={rating >= 2 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={rating >= 3 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={rating >= 4 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={rating >= 5 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: 'black'
}

Rating.propTypes = {
    rating: propTypes.number,
    color: propTypes.string,
}

export default Rating