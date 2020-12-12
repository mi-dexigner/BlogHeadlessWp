import React, { Component } from 'react'
import AdminLayout from '../components/AdminLayout'

export default class PostNew extends Component {
    constructor( props ) {
		super( props );

		this.state = {
			title: '',
			content: '',
			userID: '',
			token: '',
			postCreated: false,
			message: '',
			loading: false
		}
    }
    handleInputChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
    };
    handleFormSubmit = ( event ) => {
        event.preventDefault();
    }
    render() {
        return (
           <AdminLayout>
                 <main className="form-signin">
               <form onSubmit={ this.handleFormSubmit } className="mt-5" style={{maxWidth: '800px'}}>
               this is a post new
               </form>
               </main>
            </AdminLayout>
        )
    }
}
