
const express = require('express')
const path = require('path');

import React from 'react';
import { renderToString } from "react-dom/server";
import { Provider } from 'react-redux';

import store from "./../app/store/store.jsx";
import App from "../app/components/App.jsx";

const app = express()
var port = 8000;
app.get("/client.js",(req,res)=>{
	res.sendFile("client.js",{ root: __dirname});
});
app.get("/*", (req, res) => {
	res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
	res.write("<div id='app'>");  
	res.write(
		renderToString(
			<Provider store={store}>
				<App/>
			</Provider>
		)
	);
	res.write("</div><script src='client.js' type='text/javascript'></script>");
	res.write("</body></html>");
	res.end();
});
app.listen(port);
console.log("Server is running on port "+port);