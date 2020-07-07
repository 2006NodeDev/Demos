import React, { FunctionComponent } from 'react';

// whenever you make a title component, if you don't add the title prop, ts check will fail
interface ITitleComponentProps {
    title:string
    size:string
}

//by putting the props interface in the generics we envorce the creation of this component to follow these prop rules
export const TitleComponent: FunctionComponent<ITitleComponentProps> = (props) => {
    switch(props.size){
        case 'small':{
            return (
        
                <h6>{props.title}</h6>
            );
        }
        case 'medium':{
            return (
        
                <h3>{props.title}</h3>
            );
        }
        case 'large':{
            return (
                <h1>{props.title}</h1>
            );
        }
        default:{
            return (
                <h4>{props.title}</h4>
            );
        }
    }
}//the purpose of this component is take in a title value from its parent and then fisplay it in a nice manner