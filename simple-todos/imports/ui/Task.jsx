import React from 'react'


export default function Task(props) {
    console.log(">>>>>>>>>>", props)
    return (
        <li>{props.task_name}</li>
    );
}
