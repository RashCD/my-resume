import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app.js';
import '../styles/index.css';

import {register} from 'codelift';

register({React, ReactDOM});

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;
		return <Component {...pageProps} />;
	}
}

export default MyApp;
