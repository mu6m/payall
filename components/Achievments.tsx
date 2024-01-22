"use client";

import styled from "@emotion/styled";

const Achievment = styled.div`
	display: flex;
	max-width: 60rem;
	justify-content: space-between;
	align-items: center;
	margin-block: 3rem;
	width: 100%;
	.logo {
		width: 20rem;
	}
	.stat {
		h1 {
			font-size: 5rem;
		}
		p {
			font-weight: bold;
		}
	}
`;

export default function Achievments() {
	return (
		<>
			<Achievment>
				<h1 className="logo">Our Achivments say how good we are in this job</h1>
				<div className="stat">
					<h1>40k+</h1>
					<p>Total Users</p>
				</div>
				<div className="stat">
					<h1>2.5k+</h1>
					<p>User Ratings</p>
				</div>
			</Achievment>
		</>
	);
}
