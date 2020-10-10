import React from 'react'
import './card.sass'

const defaultImg = require('./img/default-image.png');
export const Card = (props: { title: string, img: any, link: string }) => {
    const {title, img, link} = props;
    return (
        <div className='container-card'>
            <div className='wrapper-image'>
                <a href={link} target="_blank">
                    <img src={img !== undefined ? img : defaultImg}/>
                </a>
            </div>
            <div className='footer-card'>
                <label>{title}</label>
            </div>
        </div>
    );
}
