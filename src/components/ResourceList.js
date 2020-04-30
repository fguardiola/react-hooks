import React, { useState, useEffect } from 'react';
import axios from 'axios'


const ResourceList = ({ resource }) => {
    //resource is either "posts" or "todos" string
    const [resources, setResources] = useState([])



    const fetchResources = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
    }
    // // useEffect is a conbination og componentDidMount and componentDidUpdate. Only if resource change
    //  the inner arrow function is gonna run so fetchResources is gonna be called
    useEffect(() => {
        fetchResources(resource)
    }, [resource])

    return (
        <div> {resources.length} </div>
    );

}

export default ResourceList;