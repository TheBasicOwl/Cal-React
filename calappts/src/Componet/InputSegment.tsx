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
		this.props.OnResultChange(CalcInput(this.state.input));
	};

	render() {
		return (
			<form className="container" onSubmit={this.handleSubmit}>
				<input 
				id="Input"
				name="inputSubmit"
				placeholder="input..."
				value={this.state.input}
				onChange={( ev: React.ChangeEvent<HTMLInputElement>,): void => this.setState({input: ev.target.value})}
				/>
				<button className="CalBtn" type="submit">Calculate</button> 
			</form>
	);}
}