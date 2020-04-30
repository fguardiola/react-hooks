import React from 'react';
import axios from 'axios'


class ResourceList extends React.Component {
    state = {
        resources: []
    }
    async componentDidMount() {
        const respose = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

        this.setState({ resources: respose.data })
    }
    render() {
        return (
            <div> {this.state.resources.length} </div>
        );
    }
}

export default ResourceList;