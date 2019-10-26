import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Blog extends Component {

    constructor() {
        super();
        this.state = {
            blogs:[]
        }
    }


    componentDidMount() {
        axios.get('api/blog').then(response=>{
            this.setState({
                blogs:response.data
            })
        }).catch(errors =>{
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Blog Component</div>
                            <div className="card-body">I'm an blog component!</div>
                            {this.state.blogs.map(blog => <li>{blog.body}</li>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

if (document.getElementById('example')) {
    ReactDOM.render(
        <Blog/>, document.getElementById('example')
    );
}
