import React from "react";
import './form.css';

class CreateNewForm extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			email:'',
			pass: '',
		}
		this.setData = this.setData.bind(this);

	}

	setData(e) {
		if(e.target.type ==='password'){
			this.setState({
				pass: e.target.value
			})
		}else{
			this.setState({
				email: e.target.value
			})
		}
	}


	sendForm(e){
		alert(`Thank you for registration`);

	}

	render() {
		return(
			<div className='form1'>
				<form className='form' onSubmit={this.sendForm}>
					<h1>SIGN IN TO YOUR ACCOUNT</h1>
					<div className='form-style'>
						<input className='form-inputText-style' onChange={this.setData} value= {this.state.email} placeholder='email@gmail.com' type="email"/>
						<input className='form-inputText-style' onChange={this.setData} value= {this.state.pass} placeholder='password' type="password"/>
						<label  className='form-label'>
							<input className='form-label-inputChecked-style' type="checkbox"  required/>
							<span>Keep me sign in</span>		
						</label>
					</div>
					<input  className='form--inputSubmit-style' type="submit" value='Sign in' />
					<a href="https://google.com" target='blanck' >Forgot your password?</a>
				</form>
			</div>
		)
	}
}


export default CreateNewForm;