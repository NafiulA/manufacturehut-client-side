import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contacts = () => {
    const position = [51.505, -0.09];
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='mx-auto py-2' style={{ width: "80%", height: "80%" }}>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                ManufactureHut
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Office Contacts</h1>
                    <p class="py-6">Our products have obtained certificates issued by quality inspection of various agencies. Our products are sold to various countries around the world and look forward to working with you.</p>
                    <div className='flex items-center py-2'>
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                        <div className='pl-3'>
                            <p className='font-bold'>Address</p>
                            <p>350 Flatbush ave New York, NY 10018 USA.</p>
                        </div>
                    </div>
                    <div className='flex items-center py-2'>
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        <div className='pl-3'>
                            <p className='font-bold'>Phones</p>
                            <p>123-456-789, 234-432-456</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;