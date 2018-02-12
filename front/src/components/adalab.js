import React , { Component } from 'react';

export default class Clock extends Component {
	constructor (props) {
		super(props);
		this.state = {
			hour : new Date()
		};
		// setInterval(this.updateClock,1000)
	}
	render(){
		const patata = this.props.clasesita;
		return (<p className={`${patata}  hola`}>{this.state.hour.toLocaleTimeString()}</p>)
	}

	updateClock(){
		const newHour = new Date();
		this.setState({
			hour : newHour
		}).bind(this);
	}
}
