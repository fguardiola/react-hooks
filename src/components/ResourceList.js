import React, { useState, useEffect } from 'react';
import axios from 'axios'


const ResourceList = ({ resource }) => {
    //resource is either "posts" or "todos" string
    const [resources, setResources] = useState([])



    // const fetchResources = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    //     setResources(response.data)
    // }
    // // useEffect is a conbination og componentDidMount and componentDidUpdate. Only if resource change
    //  the inner arrow function is gonna run so fetchResources is gonna be called

    //if you need an async job to be run, you need an external function like fetchResources or define the logic
    // within the arrow function but within a self invoking function 
    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(response.data)
        })(resource)
    }, [resource])

    return (
        <div> {resources.length} </div>
    );

}

export default ResourceList;