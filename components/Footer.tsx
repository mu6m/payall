"use client";

import styled from "@emotion/styled";

const FooterDiv = styled.footer`
	max-width: 60rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #0c1639;
	box-shadow: 0 0 0 100vmax #0c1639;
	clip-path: inset(0 -100vmax);
	gap: 2rem;
	padding-block: 2rem;
	.footcols {
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		.footcol {
			display: flex;
			flex-direction: column;
			* {
				text-align: left;
			}
			gap: 1rem;
			.logo {
				display: flex;
				align-items: center;
				gap: 1rem;
				svg {
					width: 5rem;
					fill: #feffff !important;
				}
			}
			.light-head {
				font-size: 1.7rem;
				font-weight: normal;
			}
		}
	}
	p {
		text-align: center;
	}
	* {
		color: #feffff;
	}
	@media (max-width: 60rem) {
		.footcols {
			display: flex;
			justify-content: center;
			.footcol {
				display: none;
			}
			.company-info {
				display: flex;
				justify-content: center;
			}
		}
	}
`;

export default function Footer() {
	return (
		<FooterDiv>
			<div className="footcols">
				<div className="footcol company-info">
					<div className="logo">
						<h1>Payall</h1>
					</div>
					<p>284 mick Street, Washington, USA</p>
					<p>Email: paylee@paylee.com</p>
				</div>
				<div className="footcol">
					<h1 className="light-head">Product</h1>
					<p>Overview</p>
					<p>Marketplace</p>
					<p>Workers</p>
				</div>
				<div className="footcol">
					<h1 className="light-head">Resources</h1>
					<p>Blog</p>
					<p>FAQ</p>
					<p>ROI Calculator</p>
				</div>
				<div className="footcol">
					<h1 className="light-head">Company</h1>
					<p>Career</p>
					<p>About</p>
					<p>Press</p>
				</div>
				<div className="footcol">
					<h1 className="light-head">Others</h1>
					<p>Privacy</p>
					<p>Terms</p>
				</div>
			</div>
			<hr />
			<p>Copyrights by @Payalt </p>
		</FooterDiv>
	);
}
