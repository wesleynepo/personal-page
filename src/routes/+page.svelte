<svelte:head>
	<title>Wesley Nepomuceno</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page">
	<div class="bento-grid">

		<!-- HERO -->
		<div class="card card-hero">
			<span class="label">PERSONAL PAGE</span>
			<h1>WESLEY<br />NEPOMUCENO</h1>
			<p class="hero-role">Software Engineer</p>
			<p class="hero-tagline">
				Software Engineer with 7 years of experience, from ERP systems to cloud platforms.
				Played roles across payments, ecommerce, and fintech — scoping projects, driving
				architectural initiatives, and building infrastructure at scale.
			</p>
		</div>

		<!-- CURRENT ROLE -->
		<div class="card card-current">
			<span class="label">CURRENTLY</span>
			<div class="current-body">
				<div class="current-company">Coinbase</div>
				<div class="current-role">Software Engineer</div>
				<div class="current-since">Oct 2024 — Present</div>
			</div>
			<div class="halftone-circle"></div>
		</div>

		<!-- EXPERIENCE -->
		<div class="card card-experience">
			<span class="label">EXPERIENCE</span>
			<div class="exp-list">
				<div class="exp-item">
					<div class="exp-company">Coinbase</div>
					<div class="exp-role">Software Engineer</div>
					<div class="exp-date">Oct 2024 — Present</div>
					<div class="exp-tags">
						<span class="tag">Go</span>
						<span class="tag">Python</span>
						<span class="tag">Compliance</span>
						<span class="tag">CX</span>
					</div>
				</div>
				<div class="exp-item">
					<div class="exp-company">Mercado Libre</div>
					<div class="exp-role">SWE — Cloud & Platform</div>
					<div class="exp-date">Mar 2024 — Sep 2024</div>
					<div class="exp-tags">
						<span class="tag">Go</span>
						<span class="tag">K8s</span>
						<span class="tag">GCP</span>
						<span class="tag">AWS</span>
					</div>
				</div>
				<div class="exp-item">
					<div class="exp-company">Mercado Libre</div>
					<div class="exp-role">SWE — MercadoPago</div>
					<div class="exp-date">Sep 2022 — Feb 2024</div>
					<div class="exp-tags">
						<span class="tag">Go</span>
						<span class="tag">Java</span>
						<span class="tag">Payments</span>
						<span class="tag">Ecommerce</span>
					</div>
				</div>
				<div class="exp-item">
					<div class="exp-company">Gazin Tech</div>
					<div class="exp-role">Software Developer</div>
					<div class="exp-date">Mar 2021 — Aug 2022</div>
					<div class="exp-tags">
						<span class="tag">TypeScript</span>
						<span class="tag">PHP</span>
						<span class="tag">Ecommerce</span>
					</div>
				</div>
				<div class="exp-item">
					<div class="exp-company">SG Sistemas</div>
					<div class="exp-role">Software Developer</div>
					<div class="exp-date">May 2019 — Jan 2021</div>
					<div class="exp-tags">
						<span class="tag">C</span>
						<span class="tag">Harbour/Clipper</span>
						<span class="tag">ERP</span>
						<span class="tag">Food Service</span>
					</div>
				</div>
			</div>
		</div>

		<!-- MISSION -->
		<div class="card card-mission">
			<span class="label">MISSION</span>
			<p class="mission-text">
				Our mission is to increase economic freedom in the world.
			</p>
			<p class="mission-sub">
				Building the financial infrastructure for the open internet.
			</p>
			<div class="dot-decoration"></div>
		</div>

		<!-- CONNECT -->
		<div class="card card-connect">
			<span class="label">CONNECT</span>
			<div class="connect-links">
				<a href="https://www.linkedin.com/in/wesleynepo/" target="_blank" rel="noreferrer">
					<span>LinkedIn</span><span class="arrow">↗</span>
				</a>
				<a href="https://github.com/wesleynepo" target="_blank" rel="noreferrer">
					<span>GitHub</span><span class="arrow">↗</span>
				</a>
				<a href="https://instagram.com/wesleynepo" target="_blank" rel="noreferrer">
					<span>Instagram</span><span class="arrow">↗</span>
				</a>
				<a href="https://www.strava.com/athletes/42153185" target="_blank" rel="noreferrer">
					<span>Strava</span><span class="arrow">↗</span>
				</a>
			</div>
		</div>

	</div>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background: #e6e6e2;
		font-family: 'Space Mono', 'Courier New', monospace;
		color: #1a1a1a;
		min-height: 100vh;
	}

	.page {
		max-width: 1080px;
		margin: 0 auto;
		padding: 2.5rem 1.5rem;
	}

	.bento-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		grid-template-areas:
			'hero hero    current'
			'exp  connect mission'
			'exp  connect mission';
	}

	/* ── Card base ── */
	.card {
		background: #ffffff;
		border: 1.5px solid #1a1a1a;
		border-radius: 4px;
		padding: 1.5rem;
		position: relative;
		overflow: hidden;
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
		animation: fadeUp 0.5s ease both;
	}

	.card:hover {
		transform: translateY(-3px);
		box-shadow: 4px 4px 0 #1a1a1a;
	}

	.label {
		display: block;
		font-size: 0.6rem;
		letter-spacing: 0.18em;
		color: #999;
		margin-bottom: 1.25rem;
	}

	/* ── Hero ── */
	.card-hero {
		grid-area: hero;
		animation-delay: 0ms;
	}

	.card-hero h1 {
		font-size: clamp(2.8rem, 5.5vw, 4.5rem);
		font-weight: 700;
		line-height: 0.9;
		letter-spacing: -0.02em;
		margin-bottom: 1.25rem;
	}

	.hero-role {
		font-size: 0.75rem;
		color: #888;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.hero-tagline {
		font-size: 0.78rem;
		line-height: 1.75;
		color: #555;
		max-width: 560px;
	}

	/* ── Current ── */
	.card-current {
		grid-area: current;
		display: flex;
		flex-direction: column;
		animation-delay: 60ms;
	}

	.current-body {
		flex: 1;
	}

	.current-company {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.05;
		margin-bottom: 0.5rem;
	}

	.current-role {
		font-size: 0.75rem;
		color: #555;
		margin-bottom: 0.2rem;
	}

	.current-since {
		font-size: 0.65rem;
		color: #aaa;
	}

	.halftone-circle {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		background-image: radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px);
		background-size: 7px 7px;
		align-self: flex-end;
		margin-top: 1.5rem;
		flex-shrink: 0;
	}

	/* ── Experience ── */
	.card-experience {
		grid-area: exp;
		animation-delay: 120ms;
	}

	.exp-list {
		display: flex;
		flex-direction: column;
	}

	.exp-item {
		padding: 0.9rem 0;
		border-bottom: 1px solid #ebebeb;
	}

	.exp-item:first-child {
		padding-top: 0;
	}

	.exp-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.exp-company {
		font-weight: 700;
		font-size: 0.8rem;
		margin-bottom: 0.15rem;
	}

	.exp-role {
		font-size: 0.7rem;
		color: #555;
		margin-bottom: 0.15rem;
	}

	.exp-date {
		font-size: 0.6rem;
		color: #aaa;
		margin-bottom: 0.45rem;
	}

	.exp-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}

	.tag {
		font-size: 0.55rem;
		letter-spacing: 0.06em;
		border: 1px solid #d0d0cc;
		padding: 0.2rem 0.45rem;
		color: #888;
	}

	/* ── Mission ── */
	.card-mission {
		grid-area: mission;
		display: flex;
		flex-direction: column;
		animation-delay: 240ms;
	}

	.mission-text {
		font-size: 0.82rem;
		line-height: 1.7;
		color: #1a1a1a;
		margin-bottom: 0.75rem;
	}

	.mission-sub {
		font-size: 0.72rem;
		line-height: 1.6;
		color: #888;
		font-style: italic;
		flex: 1;
	}

	.dot-decoration {
		width: 100%;
		height: 100px;
		background-image: radial-gradient(circle, #c8c8c4 1.5px, transparent 1.5px);
		background-size: 11px 11px;
		margin-top: 1.5rem;
		border: 1px solid #e4e4e0;
		border-radius: 2px;
	}

	/* ── Connect ── */
	.card-connect {
		grid-area: connect;
		animation-delay: 180ms;
		display: flex;
		flex-direction: column;
	}

	.connect-links {
		display: flex;
		flex-direction: column;
	}

	.connect-links a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid #ebebeb;
		text-decoration: none;
		color: #1a1a1a;
		font-size: 0.75rem;
		transition: color 0.15s ease;
	}

	.connect-links a:first-child {
		padding-top: 0;
	}

	.connect-links a:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.connect-links a:hover {
		color: #888;
	}

	.arrow {
		font-size: 0.8rem;
		color: #ccc;
		transition: color 0.15s ease;
	}

	.connect-links a:hover .arrow {
		color: #888;
	}

	/* ── Animation ── */
	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.bento-grid {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'hero    hero'
				'current exp'
				'connect exp'
				'mission mission';
		}
	}

	@media (max-width: 560px) {
		.bento-grid {
			grid-template-columns: 1fr;
			grid-template-areas:
				'hero'
				'current'
				'exp'
				'mission'
				'connect';
		}

		.card-hero h1 {
			font-size: 2.5rem;
		}
	}
</style>
