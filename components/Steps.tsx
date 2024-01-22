"use client";

import styled from "@emotion/styled";

const StepsDiv = styled.div`
	display: flex;
	max-width: 60rem;
	flex-direction: column;
	text-align: center;
	gap: 3rem;
	justify-content: space-between;
	align-items: center;
	margin-block: 3rem;
	width: 100%;
	padding-block: 3rem;
	background-color: #76bbff;
	box-shadow: 0 0 0 100vmax #76bbff;
	clip-path: inset(0 -100vmax);
	.windows {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 60rem;
		.window-wrap {
			width: 100%;
			max-width: 13rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			.window {
				padding-block: 1rem;
				padding-inline: 1rem;
				border-radius: 2rem;
				background-color: #f5fdf9;
				border: 3px solid #0c1639;
				min-height: 10rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				h2 {
					font-size: 1.2rem;
				}
			}
		}
		hr {
			display: block;
			height: 3px;
			border: 0;
			border-top: 4px solid #0c1639;
			width: 100%;
			margin-inline: 2rem;
			margin-bottom: 6rem;
			border-radius: 25rem;
		}
	}
`;

export default function Steps() {
	return (
		<>
			<StepsDiv>
				<h1>Run payroll in just 90 seconds and save your time</h1>
				<p>
					syncs all you business's HR data with payroll, so you never have to
					use a calulator or manually enter data, like housers and deductions.
					All you need to do is click "Run." It's that easy.
				</p>
				<div className="windows">
					<div className="window-wrap">
						<div className="window">
							<h2>Set Date</h2>
							<img src="https://media.tenor.com/hTWTfeXZ1DUAAAAi/plan-calendar.gif" />
						</div>
						<div>
							<h1>Step 1</h1>
							<p>At first you have to select Pay Date</p>
						</div>
					</div>
					<hr />
					<div className="window-wrap">
						<div className="window">
							<h2>Review Payroll</h2>
							<img src="https://media.tenor.com/iFOLemWTBbQAAAAi/calculating.gif" />
						</div>
						<div>
							<h1>Step 2</h1>
							<p>Review payroll, check evething is all right or not</p>
						</div>
					</div>
					<hr />
					<div className="window-wrap">
						<div className="window">
							<h2>Approve Payroll</h2>
							<img src="https://media.tenor.com/bm8Q6yAlsPsAAAAi/verified.gif" />
						</div>
						<div>
							<h1>Step 3</h1>
							<p>After reviewing jsut approve it and chill</p>
						</div>
					</div>
				</div>
			</StepsDiv>
		</>
	);
}
