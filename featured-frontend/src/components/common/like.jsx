import React from 'react';

/**
 * Input: liked: boolean
 * Output: onClick
 */


const Like = props => {
   let classes = "fa ";
        if(!props.liked) classes += "fa-heart-o"
        else classes += "fa-heart newColor"
        return <i onClick ={props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true"></i>;
}
 
export default Like;


