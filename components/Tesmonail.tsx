"use client";

import styled from "@emotion/styled";

const Tesmonail1 = styled.div`
	max-width: 60rem;
	margin-block: 3rem;
	padding-block: 3rem;
	min-height: 20rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rem;
	.image {
		width: 50%;
		height: 25rem;
		img {
			height: 100%;
			object-fit: cover;
			width: 100%;
			border-radius: 12px;
			border: 3px solid #0c1639;
		}
	}
	.text {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.hashtag {
			font-weight: bold;
			color: #76bbff;
		}
		.clicks {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			gap: 2rem;
			button {
				padding-block: 0.7rem;
				padding-inline: 2rem;
				font-weight: bold;
				background-color: #03cd69;
				border: 3px solid #0c1639;
				border-radius: 12px;
			}
			a {
				text-decoration: underline;
			}
		}
	}
`;
const Tesmonail2 = styled.div`
	max-width: 60rem;
	margin-block: 3rem;
	padding-block: 3rem;
	min-height: 20rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rem;
	.image {
		width: 50%;
		height: 25rem;
		img {
			height: 100%;
			object-fit: cover;
			width: 100%;
			border-radius: 12px;
			border: 3px solid #0c1639;
		}
	}
	.text {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.hashtag {
			font-weight: bold;
			color: #03cd69;
		}
		.clicks {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			gap: 2rem;
			button {
				padding-block: 0.7rem;
				padding-inline: 2rem;
				font-weight: bold;
				background-color: #03cd69;
				border: 3px solid #0c1639;
				border-radius: 12px;
			}
			a {
				text-decoration: underline;
			}
		}
	}
`;
const Tesmonail3 = styled.div`
	max-width: 60rem;
	margin-block: 3rem;
	padding-block: 3rem;
	min-height: 20rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rem;
	background-color: #03cd69;
	box-shadow: 0 0 0 100vmax #03cd69;
	clip-path: inset(0 -100vmax);
	.image {
		width: 50%;
		height: 18rem;
		img {
			height: 100%;
			object-fit: cover;
			width: 100%;
			border-radius: 12px;
			border: 3px solid #0c1639;
		}
	}
	.text {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.hashtag {
			font-weight: bold;
			color: #f8fdfb;
		}
		.clicks {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			gap: 2rem;
			button {
				padding-block: 0.7rem;
				padding-inline: 2rem;
				font-weight: bold;
				background-color: #f8fdfb;
				border: 3px solid #0c1639;
				border-radius: 12px;
			}
			a {
				text-decoration: underline;
			}
		}
	}
`;
const Tesmonail4 = styled.div`
	max-width: 60rem;
	margin-block: 3rem;
	padding-block: 3rem;
	min-height: 20rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rem;
	.image {
		width: 50%;
		height: 18rem;
		img {
			height: 100%;
			object-fit: cover;
			width: 100%;
			border-radius: 12px;
			border: 3px solid #0c1639;
		}
	}
	.text {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.hashtag {
			font-weight: bold;
			color: #76bbff;
		}
		.clicks {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			gap: 2rem;
			button {
				padding-block: 0.7rem;
				padding-inline: 2rem;
				font-weight: bold;
				background-color: #03cd69;
				border: 3px solid #0c1639;
				border-radius: 12px;
			}
			a {
				text-decoration: underline;
			}
		}
	}
`;
export default function Tesmonail() {
	return (
		<>
			<Tesmonail1>
				<div className="image">
					<img src="/images/hlm.webp" />
				</div>
				<div className="text">
					<p className="hashtag"># MANAGE GLOBAL PAYROLL</p>
					<h1>Pay people across the world</h1>
					<p>
						with payall, you can pa employees and contractors in minutes,
						whereever there are, from your company HQ to a satellite office in
						Alma.
					</p>
					<div className="clicks">
						<button>Get Started</button>
					</div>
				</div>
			</Tesmonail1>
			<Tesmonail2>
				<div className="text">
					<p className="hashtag"># TIME TRACKING SOFTWARE</p>
					<h1>Track hourly work and PTO easily</h1>
					<p>
						Customize you business's PTO policy, then review and approve
						employees' time off requests with a click knowing all the while that
						approved working hours and PTO automatically sync with payroll.
					</p>
					<div className="clicks">
						<button>Get Started</button>
					</div>
				</div>
				<div className="image">
					<img src="/images/hlm2.jpg" />
				</div>
			</Tesmonail2>
			<Tesmonail3>
				<div className="image">
					<img src="/images/dash.jpg" />
				</div>
				<div className="text">
					<p className="hashtag"># POWERFUL REPORTING TOOLS</p>
					<h1>Pay people across the world</h1>
					<p>
						Create any report you can think of Use our library of pro-built
						reports or create custom ones using any employee information You can
						make faster, better decisions and well-informed plano for your
						company future.
					</p>
					<div className="clicks">
						<button>Get Started</button>
					</div>
				</div>
			</Tesmonail3>
			<Tesmonail4>
				<div className="text">
					<p className="hashtag"># SUPPORTED INTEGRATIONS</p>
					<h1>Track hourly work and PTO easily</h1>
					<p>
						Sync all your systems with payroll Automatically keeps your payroll
						and general ledger up to date by syncing with over 400 apps-from
						accounting software like Quickbooks and NetSuite, to time tracking
						tools like TSheets and Deputy.
					</p>
					<div className="clicks">
						<button>View All Integrations</button>
					</div>
				</div>
				<div className="image">
					<img src="/images/hlm2.jpg" />
				</div>
			</Tesmonail4>
		</>
	);
}
