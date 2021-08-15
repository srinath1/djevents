import Image from 'next/image';
import { useState, useEffect } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocode from 'react-geocode';

export default function EventMap({ evt }) {
	const [ lat, setLat ] = useState(null);
	const [ lng, setLng ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ viewport, setViewport ] = useState({
		latitude: 40.712772,
		longitude: -73.935242,
		width: '100%',
		height: '500px',
		zoom: 12
	});

	useEffect(() => {
		// Get latitude & longitude from address.
		Geocode.fromAddress(evt.address).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
				setViewport({ ...viewport, latitude: lat, longitude: lng });
				setLoading(false);
			},
			(error) => {
				console.error(error);
			}
		);
	}, []);

	Geocode.setApiKey('AIzaSyBdhk6PZRZlfWjxbPssOLK7p3Yn8MPgLwk');

	if (loading) return false;

	return (
		<ReactMapGl
			{...viewport}
			mapboxApiAccessToken={
				'pk.eyJ1Ijoic3JpbmF0aGNvcGVuaGFnZW4iLCJhIjoiY2p1c2JqaTBsMDJlejQ0cDJsZjRrYnJ1NiJ9.9cGLlyheRCK8u6lg641DAA'
			}
			onViewportChange={(vp) => setViewport(vp)}
		>
			<Marker key={evt.id} latitude={lat} longitude={lng}>
				<Image src="/images/pin.svg" width={30} height={30} />
			</Marker>
		</ReactMapGl>
	);
}
