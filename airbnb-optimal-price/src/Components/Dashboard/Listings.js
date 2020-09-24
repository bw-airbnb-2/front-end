import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

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
    const [ listings, setListings ] = useState([])

    useEffect( () => {
        axiosWithAuth()
        .get('https://airbnb-bw-backend.herokuapp.com/api/listings')
        .then( res => {
            console.log(res)
            console.log(res.data)
            setListings(res.data)
        })
        .catch( err => { console.error(err)})
    }, [])

    return(
        <div>
        {
            listings.map( list => {
                return <ListItem key={list.id} />;
            })
        }
        </div>
    )
}