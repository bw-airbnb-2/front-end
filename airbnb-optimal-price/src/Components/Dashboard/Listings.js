import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

const initialMockData = [
    {
        name: 'Beech',
        roomType: 'house',
        minNights: 2,
        location: '1800 Beech Avenue Nashville, TN 37203'
    },
    {
        name: 'Beech',
        roomType: 'house',
        minNights: 2,
        location: '1800 Beech Avenue Nashville, TN 37203'
    }
]


export default function Listings() {
    const [ listings, setListings ] = useState(initialMockData)

    return(
        <div>
        {
            listings.map( list => {
                return <ListItem />;
            })
        }
        </div>
    )
}