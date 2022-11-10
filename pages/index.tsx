import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { addUtxoInputs } from '@tatumio/tatum';

export default function Home({ data }) {
	return (
		<div className="">
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />
			{/* Banner */}
			<Banner />
			{/* Main section */}
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
					{/* pull data from server */}
					{data?.map((item) => (
						<h1>{item.location}</h1>
					))}
				</section>
			</main>
			{/*  */}
		</div>
	);
}

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
			data: data,
		},
	};
}
