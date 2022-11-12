import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';

function Home({ data }) {
	return (
		<div className="">
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
					<div className="grid grid-cols-4 p-15">
						{data?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>
			</main>

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-10">
					<h2 className="text-4xl font-semibold pb-5">Best Destinations</h2>
				</section>
			</main>
		</div>
	);
}

export default Home;
const fetch = require('node-fetch');
const https = require('https');
const httpsAgent = new https.Agent({
	rejectUnauthorized: false,
});

export async function getStaticProps() {
	const res = await fetch('https://links.papareact.com/pyp', {
		agent: httpsAgent,
	});
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
}
