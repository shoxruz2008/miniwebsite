import React from 'react'
import { ImLocation } from "react-icons/im";


const Country = (props) => {
	
  return (
	<div className='country'>
		<img className='country--photo' src={props.imageUrl} alt={props.title} />
		<div className='country--info'>
			<div className='country--location-info'>
				<ImLocation className='country--icon'/> 
				<div className="counrty--location-name">{props.location}</div>
				<a className='countr--link' target='blank' href={props.googleMapsUrl}>View on Google Maps</a>
			</div>
			<div className="country--title">{props.title}</div>
			<div className="country--dates">
				<span className='country--travelStart'>{props.startDate} - </span>
				<span className='country--travelEnd'>{props.endDate}</span>
			</div>
			<div className="country--text">{props.description}</div>
		</div>
	</div>
  )
}

export default Country