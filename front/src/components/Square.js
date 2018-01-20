import React, { Component } from 'react';
export let Square = (props) => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
