"use client";
import Achievments from "@/components/Achievments";
import Nav from "@/components/Nav";
import Steps from "@/components/Steps";
import styled from "@emotion/styled";
import Tesmonail from "@/components/Tesmonail";
import Review from "@/components/Review";
import Email from "@/components/Email";
import Footer from "@/components/Footer";

const MainHero = styled.div`
	max-width: 60rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #24b95b;
	box-shadow: 0 0 0 100vmax #24b95b;
	clip-path: inset(0 -100vmax);
	.main-hero-msg {
		min-height: 20rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		.image {
			width: 50%;
			img {
				width: 100%;
			}
		}
		.text {
			width: 50%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			.hashtag {
				color: #f5fdf9;
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
					background-color: #f5fdf9;
					border: 3px solid #0c1639;
					border-radius: 12px;
				}
				a {
					text-decoration: underline;
				}
			}
		}
	}
	position: relative;
	.slidetext {
		bottom: 0;
		display: flex;
		gap: 1rem;
		position: absolute;
		box-shadow: 0 0 0 100vmax #0c1639;
		clip-path: inset(0 -100vmax);
		background-color: #0c1639;
		padding-block: 1.5rem;
		.marquee {
			position: relative;
			display: flex;
			gap: 1rem;
			white-space: nowrap;
			p {
				color: #f5fdf9;
				font-weight: bold;
				font-size: 3rem;
			}
			svg {
				width: 3rem;
				fill: #f5fdf9;
			}
		}
	}
`;
export default function Page() {
	return (
		<>
			<MainHero>
				<Nav />
				<div className="main-hero-msg">
					<div className="image">
						<img src="/images/man.png" />
					</div>
					<div className="text">
						<p className="hashtag"># PAYROLL SOFTWARE</p>
						<h1>a powerfull payroll system that can operate itself</h1>
						<p>
							sync all you business's HR data with payroll, so you never have to
							use a clculatoe or manually enter data like hours and deductions.
							All you need to do is clock "Run" It's that easy
						</p>
						<div className="clicks">
							<button>Get Started</button>
							<a href="#">Watch Video</a>
						</div>
					</div>
				</div>
				<div className="slidetext">
					<div className="marquee">
						{[...Array(2)].map((i) => {
							return (
								<>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										version="1.1"
										id="Layer_1"
										x="0px"
										y="0px"
										viewBox="0 0 122.88 122.88"
										xmlSpace="preserve"
									>
										<g>
											<polygon points="19.44,50.16 8.22,30.72 30.72,30.72 30.72,8.13 50.16,19.44 61.44,0 72.72,19.44 92.16,8.13 92.16,30.72 114.75,30.72 103.44,50.16 122.88,61.44 103.44,72.72 114.75,92.16 92.16,92.16 92.16,114.66 72.72,103.44 61.44,122.88 50.16,103.44 30.72,114.66 30.72,92.16 8.22,92.16 19.44,72.72 0,61.44 19.44,50.16" />
										</g>
									</svg>
									<p>Automatic Payroll</p>
								</>
							);
						})}
					</div>
				</div>
			</MainHero>
			<Achievments />
			<Steps />
			<Tesmonail />
			<Review />
			<Email />
			<Footer />
		</>
	);
}
