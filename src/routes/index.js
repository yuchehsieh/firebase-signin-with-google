import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/analytics';

import HomePage from '../layouts/Home';

const firebaseConfig = {
    apiKey: 'AIzaSyAnTlhGhR9z6dBpGlmIUoYhwGQAGzGTaqA',
    authDomain: 'web-auth-ad959.firebaseapp.com',
    projectId: 'web-auth-ad959',
    storageBucket: 'web-auth-ad959.appspot.com',
    messagingSenderId: '920566945970',
    appId: '1:920566945970:web:45475dbfcfe65aebbe51ab',
    measurementId: 'G-CDMV1GLBN2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default Routes;
