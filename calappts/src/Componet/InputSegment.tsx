import React, { Component } from "react";
import { CalcInput } from '@cal/calulatorlib';

interface Props {
	OnResultChange: (result: Array<string>) => void
}

interface State {
	input: string;
}

export class InputSegment extends Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			input: ""
		};
	}
	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("submit: " + this.state.input);
		this.props.OnResultChange(CalcInput(this.state.input));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
				name="inputSubmit"
				placeholder="input..."
				value={this.state.input}
				onChange={( ev: React.ChangeEvent<HTMLInputElement>,): void => this.setState({input: ev.target.value})}
				/>
				<button type="submit">Calculate</button> 
			</form>
	);}
}