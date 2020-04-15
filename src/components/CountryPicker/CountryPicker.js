import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import './CountryPicker.module.css'

import { fetchCountries } from '../../api'
function CountryPicker({ handleCountryChange }) {
    const [fetchedCountries, setfetchedCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setfetchedCountries]);

    console.log(fetchedCountries)
    return (
        <div>
            <FormControl className="formControl">
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="" >Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
