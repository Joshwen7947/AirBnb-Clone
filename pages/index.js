import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCards from '../components/MediumCards';

function Home({ data1, data2 }) {
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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-15">
						{data1?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>
				<section className="pt-10">
					<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{data2?.map(({ img, title }) => (
							<MediumCards key={img} img={img} title={title} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export default Home;

const fetch1 = require('node-fetch');
const https1 = require('https');
const httpsAgent1 = new https1.Agent({
	rejectUnauthorized: false,
});

const fetch2 = require('node-fetch');
const https2 = require('https');
const httpsAgent2 = new https2.Agent({
	rejectUnauthorized: false,
});

export async function getStaticProps() {
	const res1 = await fetch1('https://links.papareact.com/pyp', {
		agent: httpsAgent1,
	});
	const res2 = await fetch2('https://links.papareact.com/zp1', {
		agent: httpsAgent2,
	});

	const data1 = await res1.json();
	const data2 = await res2.json();
	return {
		props: {
			data1,
			data2,
		},
	};
}
