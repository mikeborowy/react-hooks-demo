import React, { Component } from 'react';
import axios from 'axios';

class ResourceList extends Component {
    state ={
        resources: []
    }
    getData = async () => {
        const option = this.props.resource;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${option.toLowerCase()}`)
        return response.data;
    }
    async componentDidMount() {
        this.getData()
            .then((resources) => this.setState({ resources }));
    }
    async componentDidUpdate(prevProps, prevState) {
        if(prevProps.resource !== this.props.resource) {
            this.getData()
                .then((resources) => this.setState({ resources }));
        }
    }
    render() {
        return (<div>{this.state.resources.length}</div>);
    }
}
export default ResourceList;