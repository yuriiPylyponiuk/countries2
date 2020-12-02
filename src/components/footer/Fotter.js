import React from 'react';
import './footerStyle.css';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';

class Footer extends React.Component{
	render(){
		return(
			<footer>
				<div className="block-text">
					<h3>Yurii Pylyponiuk</h3>
				</div>
				<div className="block-contacts">
					<a href="https://www.facebook.com/" className='linkFacebook'><img src={facebook} alt="logo"/></a>
					<a href="https://www.linkedin.com/in/yurii-pylyponiuk/" className='linkLinkedin'><img src={linkedin} alt="logo"/></a>
					<a href="https://www.instagram.com/" className='linkInstagram'><img src={instagram} alt="logo"/></a>
				</div>
			</footer>
		)
	}
}

export default Footer;