import React from 'react'
import {useSelector, shallowEqual} from 'react-redux';
import './search-list.sass'
import {RootState} from "../reducers";
import {Card} from "./card";
import {Item} from "../action/search-vm";

export const SearchList = () => {
    const {loading, list} = useSelector((state: RootState) => state.searchList, shallowEqual);
    return (
        <div className='search-list-container'>
            {
                loading ? (<div className='loading'>loading.....</div>) :
                    (
                        list.map((item: Item, key: number) => {
                            return <Card
                                key={key}
                                img={'pagemap' in item ? 'cse_image' in item.pagemap ? item.pagemap.cse_image[0].src : undefined : undefined}
                                link={item.link}
                                title={item.title}
                            />
                        })
                    )
            }
        </div>
    )
}
