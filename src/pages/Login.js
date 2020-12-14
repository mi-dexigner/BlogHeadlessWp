import Axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar'
import '../styles/login.css'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            userNiceName:'',
            userEmail:'',
            loggedIn:false,
            loading:false,
            error:''
        }
    }

     onFormSubmit =  async ( event ) =>{
       event.preventDefault();
       const loginData = {
        username: this.state.username,
        password: this.state.password,
    };
    this.setState( { loading: true }, () => {
        //https://api.midexigner.com/wp-json/wp/v2/token?api_key=1A0oBLEWORhu5fn5IayPDwEWO&api_secret=lIWYJFSeQFJI5^Cy8G%23tYv0%23i$yf!%%26C
       Axios.post( 'https://api.midexigner.com/wp-json/jwt-auth/v1/token', loginData ).then( res => {
        if ( undefined === res.data.token ) {
            this.setState( { error: res.data.message, loading: false } );
            return;
        }
        const { token, user_nicename, user_email } = res.data;

        localStorage.setItem( 'token', token );
        localStorage.setItem( 'userName', user_nicename );
        localStorage.setItem( 'loggedIn', true );
        
        this.setState( {
            loading: false,
            token: token,
            userNiceName: user_nicename,
            userEmail: user_email,
            loggedIn: true
        } )

        }).catch( err => {this.setState( { error: err.response.data.message, loading: false } );
				} )
    } )
    }

    handleOnChnage = (event) =>{
        this.setState( { [event.target.name]: event.target.value } );
    }

    render() {
        const { username, password, userNiceName, loggedIn, error, loading }= this.state;
        const user = ( userNiceName ) ? userNiceName : localStorage.getItem( 'userName' );

        return (
            <>
                 <Navbar/>
                 {loggedIn || localStorage.getItem( 'token' ) ? (<Redirect to={`/admin/dashboard/${user}`} noThrow />):(
              <main className="form-signin">
                  { error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
  <form onSubmit={ this.onFormSubmit }>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="mb-3">
    <label htmlFor="username" className="visually-hidden">username</label>
    <input type="text" 
    className="form-control" 
    placeholder="username"
    name="username"
    value={username} 
    onChange={this.handleOnChnage}
    required 
    autoFocus 
    />
    </div>
    <div className="mb-3">
    <label htmlFor="password" className="visually-hidden">Password</label>
    <input type="password" 
    className="form-control" 
    placeholder="Password"
    name="password"
    value={password}
    onChange={this.handleOnChnage}
    required />
   </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    { loading && <Loader/> }
   
  </form>
</main>
)}

            </>
        )
    }
}
