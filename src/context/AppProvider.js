import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppProvider = (props)=>{
    const [ store, setStore ] = useState( {
		userName: '',
        token: '',
        loggedIn:'',
		activeMenu: {},
		sidebarActive: true
    } );
    useEffect( () => {
        const fetchBusinesses = () => {
		const token    = localStorage.getItem( 'token' );
		const userName = localStorage.getItem( 'userName' );
		const loggedIn = localStorage.getItem( 'loggedIn' );

		setStore({...store, token, userName,loggedIn});
        }
        fetchBusinesses();
	},[]);
    return (
        <AppContext.Provider  value={ [ store, setStore ] }>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;