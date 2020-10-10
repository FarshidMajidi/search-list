import React, {useCallback, useEffect, useState} from 'react';
import {FormSearch} from './form-search';
import {SearchList} from './search-list';
import {fetchDataAsync, resetSearch} from '../action';
import {useDispatch} from 'react-redux';
import './screen-list.sass';
import {debounce} from 'lodash';

export const ScreenList = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

    const delayedQuery = useCallback(debounce(() => dispatch(fetchDataAsync(search)), 500), [search]);

    useEffect(() => {
        if (!!search) {
            delayedQuery()
        } else {
            dispatch(resetSearch())
        }
        return delayedQuery.cancel;
    }, [search, delayedQuery]);

    return (
        <section className='screen-list-container'>
            <FormSearch value={search} onChange={handleSearch}/>
            <SearchList/>
        </section>
    );
}

