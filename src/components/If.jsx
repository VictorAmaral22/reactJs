import React from 'react'

export default function (props) {
    if(props.test){
        return props.children;
    } else {
        return false
    }
}