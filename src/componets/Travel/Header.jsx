import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
const Header = () => {
  return (
	<header style={{
		background:'#F55A5A',
		color:'white',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		padding:'20px '


	}}>
		<FaGlobeAmericas style={{
			width:'24px',
			height:'24px',
			marginRight:'7px'
		}}/>
		<span style={{
			fontSize:'14.5px'
		}}>my travel journal.</span>
	</header>
  )
}

export default Header