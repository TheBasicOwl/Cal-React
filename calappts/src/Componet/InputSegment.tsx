import React, { Component } from "react";
import { CalcInput } from '@cal/calulatorlib';

interface Props {
    OnResultChange: (result: Array<string>) => void
}

export class InputSegment extends Component<Props, {}> {
	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		this.props.OnResultChange(CalcInput("2+2*2"));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="inputSubmit"/>
				<button type="submit">Calculate</button> 
			</form>
	);}
}