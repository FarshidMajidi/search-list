import React from 'react'
import './input.sass'

export interface IInputProps {
    value: string;
    name: string;
    type: string;
    icon: string;
    placeholder: string;
    onChange: (e: any) => any;
}

export const Input = (props: IInputProps) => {
    const {name, value, type, icon, placeholder, onChange} = props;
    return (
        <div className="input-container">
            <img src={icon}/>
            <input type={type}
                   name={name}
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange}
            />
        </div>
    );
}
