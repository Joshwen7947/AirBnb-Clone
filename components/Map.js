import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});
	// Transfrom props obj to required obj of long and lat
	const coordinates = searchResults.map((res) => ({
		longitude: res.long,
		latitude: res.lat,
	}));
	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle={'mapbox://styles/masterdev710/clathi3rg001e15p80gcg9l3p'}
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMove={(nextViewport) => setViewport(nextViewport.viewport)}
		>
			{searchResults.map((res) => (
				<div key={res.long}>
					<Marker
						role={'img'}
						longitude={res.long}
						latitude={res.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							onClick={() => setSelectedLocation(res)}
							className="cursor-pointer text-2xl animate-bounce"
						>
							📌
						</p>
					</Marker>
					{selectedLocation.long === res.long ? (
						<Popup
							closeOnClick={true}
							onClose={() => setSelectedLocation({})}
							latitude={res.lat}
							longitude={res.long}
						>
							{res.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
}

export default Map;
