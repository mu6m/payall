"use client";

import styled from "@emotion/styled";

const ReviewDiv = styled.div`
	display: flex;
	max-width: 60rem;
	width: 100%;
	flex-direction: column;
	text-align: center;
	gap: 3rem;
	justify-content: space-between;
	align-items: center;
	margin-block: 3rem;
	padding-block: 3rem;
	.reviews {
		display: flex;
		gap: 2rem;
		.review {
			display: flex;
			padding: 2rem;
			justify-content: space-between;
			flex-direction: column;
			width: 20rem;
			gap: 1rem;
			p {
				text-align: left;
				font-size: 1.3rem;
				margin-bottom: 1rem;
			}
			border-radius: 1rem;
			border: 3px solid #0c1639;
			hr {
				display: block;
				margin: 0 auto;
				height: 3px;
				border: 0;
				border-top: 3px solid #0c1639;
				width: 100%;
				border-radius: 25rem;
			}
			.profile {
				display: flex;
				gap: 1rem;
				.text {
					display: flex;
					flex-direction: column;
					justify-content: center;
					h2 {
						text-align: left;
						font-size: 1.3rem;
					}
					p {
						font-size: 1rem;
					}
				}
				img {
					border: 3px solid #0c1639;
					width: 60px;
					height: 60px;
					border-radius: 50%;
				}
			}
		}
		.blue-review {
			background-color: #76bbff;
		}
		.purpel-review {
			background-color: #b57af2;
		}
		.green-review {
			background-color: #03cd69;
		}
	}
	button {
		padding-block: 0.7rem;
		padding-inline: 2rem;
		font-weight: bold;
		background-color: #ffffff;
		border: 3px solid #0c1639;
		border-radius: 12px;
	}
	@media (max-width: 60rem) {
		.reviews {
			flex-direction: column;
		}
	}
`;

export default function Review() {
	return (
		<>
			<ReviewDiv>
				<h1>Let’s hear some compliments form our daily users</h1>
				<div className="reviews">
					<div className="review green-review">
						<p>
							“takes care of those 1000 little daily things, saving not Just my
							time, but managers aswell.”
						</p>
						<hr />
						<div className="profile">
							<img src="/images/r1.jpg" alt="profile image" />
							<div className="text">
								<h2>John Hammond</h2>
								<p>Ceo of New</p>
							</div>
						</div>
					</div>
					<div className="review blue-review">
						<p>
							“takes care of those 1000 little daily things, saving not Just my
							time, but managers aswell.”
						</p>
						<hr />
						<div className="profile">
							<img src="/images/r1.jpg" alt="profile image" />
							<div className="text">
								<h2>Luke Hammond</h2>
								<p>Ceo of Old</p>
							</div>
						</div>
					</div>
					<div className="review purpel-review">
						{" "}
						<p>
							“takes care of those 1000 little daily things, saving not Just my
							time, but managers aswell.”
						</p>
						<hr />
						<div className="profile">
							<img src="/images/r1.jpg" alt="profile image" />
							<div className="text">
								<h2>Fred Hammond</h2>
								<p>Ceo of Random</p>
							</div>
						</div>
					</div>
				</div>
				<button>View All</button>
			</ReviewDiv>
		</>
	);
}
