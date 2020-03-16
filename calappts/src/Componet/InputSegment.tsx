import React, { useRef, Component, InputHTMLAttributes } from "react";
import { CalcInput } from '@cal/calulatorlib';

interface Props {
    OnResultChange: (result: Array<string>) => void
}

export class InputSegment extends Component<Props, {}> {
	handleSubmit(e: React.FormEvent) {
		console.log(CalcInput("2+2"))
		e.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="inputSubmit"/>
				<button type="submit">Calculate</button> 
			</form>
	);}
}