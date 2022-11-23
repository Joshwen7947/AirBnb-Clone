import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
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
		></ReactMapGL>
	);
}

export default Map;
