import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Controls from '../components/Controls';
import List from '../components/List';
import { ALL_COUNTRIES } from '../config';
import { useNavigate} from 'react-router-dom';




export default function HomePage({ countries, setCountries}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!countries.length)
        axios.get(ALL_COUNTRIES)
            .then(({ data }) => setCountries(data))

    }, [])




    return (
        <div>
            <Controls />
            <List>
                {
                    countries.map(c => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: c.region
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital
                                }
                            ]
                        }
                        return (
                            <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
                        )
                    })
                }
            </List>
        </div>
    )
}
