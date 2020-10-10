import React from 'react'
import './form-search.sass'
import {Input} from '../component/input';
import {useDispatch} from 'react-redux';
import {fetchDataAsync} from '../action';

const searchIcon = require('./search-icon.svg');

export const FormSearch = (props: { value: string, onChange: any }) => {
    const {value, onChange} = props;
    const dispatch = useDispatch();
    return (
        <div className='form-search-container'>
            <Input value={value}
                   name={'search'}
                   type={'text'}
                   icon={searchIcon}
                   placeholder={'search...'}
                   onChange={onChange}
            />
            <button onClick={() => dispatch(fetchDataAsync(value))}>Search</button>
        </div>
    );
}
