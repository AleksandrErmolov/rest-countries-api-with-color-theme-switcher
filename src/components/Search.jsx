import styled from "styled-components";
import {IoSearch} from 'react-icons/io5'
import React, {useEffect, useState} from 'react'


const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;


const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;


export default function Search({search, setSearch, countries, region}) {

    console.log(region)
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        document.body.addEventListener('click', () => {
            setIsActive(false)
        })

        return () => {
            document.body.removeEventListener('click', () => {
                setIsActive(false)
            })
        }
    }, [isActive])


    function filterByName(arr) {
        let newArr = [...arr]
        return newArr.filter((el) => el.name.includes(search))
    }

    function filterByRegion(arr) {

        if(region){
            let newArr = [...arr]
            return newArr.filter((el) => el.region.includes(region.value))
        }

        return arr
    }


    function selectItem(e) {
        setSearch(e.target.textContent)
    }

    function changeActive(e) {
        e.stopPropagation()
        setIsActive(!isActive)
    }

    return (
        <>
            <InputContainer>
                <IoSearch/>
                <Input onChange={(e) => setSearch(e.target.value)} value={search} onClick={(e) => changeActive(e)}/>

                {isActive
                    ? <ul className='search__list'>
                        {filterByRegion(filterByName(countries)).map(el =>
                            <li
                                key={el.name}
                                className='list__item'
                                onClick={(e) => selectItem(e)}>
                                {el.name}
                            </li>
                        )}
                    </ul>
                    : null
                }

            </InputContainer>
        </>
    )
}
