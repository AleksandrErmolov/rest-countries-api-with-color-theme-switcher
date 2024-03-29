import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Controls from '../components/Controls';
import List from '../components/List';
import { ALL_COUNTRIES } from '../config';
import { useNavigate } from 'react-router-dom';




export default function HomePage({ countries, setCountries }) {


    const [filtredCountries, setfiltredCountries] = useState(countries)

    const navigate = useNavigate();


    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

        }


        setfiltredCountries(data)
    }


    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES)
                .then(({ data }) => setCountries(data))

    }, [])


    useEffect(() => {
        handleSearch()
    }, [countries])


    return (
        <div>
            <Controls onSearch={handleSearch} countries={countries}/>
            <List>
                {
                    filtredCountries.map(c => {
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
