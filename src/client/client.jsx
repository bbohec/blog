import React from 'react';
import {hydrate} from 'react-dom';
import { Provider } from 'react-redux';

import store from "./../app/store/store.jsx";
import App from "./../app/components/App.jsx";

import axios from "axios";



store.dispatch({
	type: 'FETCH_POSTS',
	payload: axios.get("http://rest.learncode.academy/api/reacttest/tweets")
})

hydrate(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('app')
);