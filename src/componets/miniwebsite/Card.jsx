import React from 'react'

const Card = (props) => {

  return (
	<div className='card'>
		<img className='card--image' src={`../images/${props.img}`} alt="person1" />
		<div className="card--stats">
			<img src="../images/star.png" alt="star" className='card--start'/>
			<span>{props.rating}</span>
			<span className='gray'>({props.reviewCount}) ▪ </span>
			<span className='gray'>{props.location}</span>
		</div>
		<p>{props.title}</p>
		<p><span className='bold'>From ${props.price}</span> / person</p>

	</div>
  )
}

export default Card;