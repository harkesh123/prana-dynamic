import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: '40rem',
    height: '30rem'
  };

export default function MapHome() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || ""
      })

 if (!isLoaded) return <div>Loading...</div>;
 return <Map />;
}
 
function Map() {
    const center = {
        lat: 13.026669036581277,
        lng: 77.6273833883564
      }; const [map, setMap] = React.useState(null) 
const center1 = useMemo(()=>({ lat: 13.026669036581277,
    lng: 77.6273833883564}),[])
    // const onLoad = React.useCallback(function callback(map:any) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
      
    //     setMap(map)
    //   }, [])
 
 const onUnmount = React.useCallback(function callback(map:any) {
   setMap(null)
 }, [])
 return (
    <>
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center1}
        // onLoad={onLoad}
        zoom={11}
        onUnmount={onUnmount}
      >
         <Marker position={center} />
      </GoogleMap>
   </>
 );
}