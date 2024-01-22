"use client";

import styled from "@emotion/styled";

const EmailForm = styled.div`
	display: flex;
	background-color: #fff001;
	box-shadow: 0 0 0 100vmax #fff001;
	clip-path: inset(0 -100vmax);
	max-width: 60rem;
	width: 100%;
	flex-direction: column;
	text-align: center;
	gap: 3rem;
	justify-content: space-between;
	align-items: center;
	margin-top: 3rem;
	padding-block: 3rem;
	h1 {
		font-size: 2rem;
	}
	.form {
		display: flex;
		gap: 2rem;
		input {
			width: 30rem;
			padding-block: 0.7rem;
			padding-inline: 2rem;
			background-color: #ffffff;
			border: 3px solid #0c1639;
			border-radius: 12px;
		}
		button {
			padding-block: 0.7rem;
			padding-inline: 2rem;
			font-weight: bold;
			background-color: #03cd69;
			border: 3px solid #0c1639;
			border-radius: 12px;
		}
	}
`;

export default function Email() {
	return (
		<>
			<EmailForm>
				<h1>Make payall part of your work and get daily update.</h1>
				<div className="form">
					<input placeholder="Enter Your Email"></input>
					<button>View All</button>
				</div>
			</EmailForm>
		</>
	);
}
