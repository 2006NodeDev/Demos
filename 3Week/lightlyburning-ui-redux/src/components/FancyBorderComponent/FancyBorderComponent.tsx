import React, { FunctionComponent } from 'react'

export const FancyBorder:FunctionComponent<any> = (props) =>{
    let fancyStyle = {
        border: '2px dashed orange',
        margin: '2vw 2vh 2vw 2vh'
    }

    return (
        <div style={fancyStyle}>
            {props.children}
        </div>
    )
}