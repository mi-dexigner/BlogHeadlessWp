import Axios from 'axios';
import React, { Component } from 'react'
import AdminLayout from '../components/AdminLayout'
import Loader from '../components/Loader'

export default class PostNew extends Component {
    constructor( props ) {
		super( props );

		this.state = {
			title: '',
			content: '',
			userID: '',
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
        this.setState( { loading: true } )
        const formData = {
          //author: this.state.userID,
          author: 1,
          title: this.state.title,
          content: this.state.content,
          status: 'publish'
        };
        const authToken = localStorage.getItem( 'token' );
        /**
		 * Make a post request to node server route '/create-post',
		 * to create a new post on WordPress
		 */
		Axios.post( `https://api.midexigner.com/wp-json/wp/v2/posts`, formData, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken}`
			}
		} )
			.then( res => {
				this.setState( {
					loading: false,
					postCreated: !! res.data.id,
					message: res.data.id ? 'New Post Created' : ''
				} );
			} )
			.catch( err => {
				this.setState( { loading: false, message: err.response.data.message } );
			} );
	
        console.log(this.state);
    }

   
    render() {
      const { loading, message, postCreated } = this.state;
        return (
           <AdminLayout>
                 <main >
                 { message && <div className={ `alert ${ postCreated ? 'alert-success' : 'alert-danger' }` } dangerouslySetInnerHTML={{__html: message}}/> }
               <form onSubmit={ this.handleFormSubmit } className="mt-5">
              <div className="d-grid gap-2 col-6 mx-auto">
              <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" onChange={ this.handleInputChange } className="form-control" id="title"/>
              </div>
              <div className="mb-3">
              <label htmlFor="content">Content</label>
              <textarea name="content" className="form-control" onChange={ this.handleInputChange } id="content" rows="3"/>
              </div>
              <button type="submit" className="btn btn-secondary w-auto">Submit</button>
              { loading && <Loader/> }
                
              </div>
               </form>
               </main>
            </AdminLayout>
        )
    }
}
