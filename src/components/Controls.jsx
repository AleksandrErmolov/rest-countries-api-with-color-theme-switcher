import React, { useEffect, useState } from 'react'
import { CustomSelect } from './CustomSelect'
import Search from './Search'
import styled from 'styled-components';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Controls({onSearch, countries }) {

    const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  
  useEffect(() => { 
    const regionValue = region?.value || ''
    onSearch(search, regionValue)
  }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} countries={countries} region={region} onSearch={onSearch}/>
            <CustomSelect
                options={options}
                placeholder='Filter by Region'
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion} />
        </Wrapper>
    )
}
