import React from "react";

import './custom-button.styles.css';

export const CustomButton = (props) => {
    return (
        <button 
            className='custom-button'
            style={{
                backgroundColor: props.backgroundColor ? props.backgroundColor : 'var(--color-white-original)',
                color: props.color ? props.color : 'var(--color-black-primary)',
                width: props.width ? props.width : 'none',
                height: props.height ? props.height : 'none',
                marginTop: props.marginTop ? props.marginTop : 'none',
                fontSize: props.fontSize ? props.fontSize : 'none',
            }}
            onClick={props.onClick}
        >
                {props.children}
        </button>
    )
}