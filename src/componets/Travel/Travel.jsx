import React from 'react'
import './travel.css'
import Header from './Header'
import Country from './Country'

import { countries } from './data';


const Travel = () => {

	const country = countries.map((item) => {
		return (
			<Country
				key={item.id}
				title={item.title}
				location={item.location}
				googleMapsUrl={item.googleMapsUrl}
				startDate={item.startDate}
				endDate={item.endDate}
				description={item.description}
				imageUrl={item.imageUrl}
			/>
		)
	})

  return (
	<div>
		<Header/>
		<section className='country-lists'>
		{country}
		</section>
		
	</div>
  )
}

export default Travel