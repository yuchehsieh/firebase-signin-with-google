import React, { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
// const twitterProvider = new firebase.auth.TwitterAuthProvider();
// const githubProvider = new firebase.auth.GithubAuthProvider();

const Home = () => {
    const [currentUser, setCurrentUser] = useState();

    const onGoogleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                //
                // The signed-in user info.
                var user = result.user;
                console.log(credential); // idToken, accessToken
                console.log(user); // email, displayName, uid(used in firebase-console's table)
            })
            .catch((error) => {
                console.log(error);
                // var errorCode = error.code;
                // var errorMessage = error.message;
                //
                // The email of the user's account used.
                // var email = error.email;
                //
                // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
            });
    };

    const onMurphyLogin = () => {
        let email = 'hsiehdanny860605@gmail.com';
        let password = 'ntuedtd';

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                // ...
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
                // var errorCode = error.code;
                // var errorMessage = error.message;
            });
    };

    const onTestLogin = () => {
        let email = 'testabc@gmail.com';
        let password = 'ntuedtd';

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                // ...
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
                // var errorCode = error.code;
                // var errorMessage = error.message;
            });
    };

    const onShowCurrentUser = () => {
        let user = firebase.auth().currentUser;
        console.log(user);
        setCurrentUser(user);
    };

    const onLinkCurrentUserToGoogle = () => {
        firebase
            .auth()
            .currentUser.linkWithPopup(googleProvider)
            .then((result) => {
                // Accounts successfully linked.
                var credential = result.credential;
                var user = result.user;
                console.log(credential);
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                // Handle Errors here.
                // ...
            });
    };

    const onUnLinkCurrentUSer = () => {
        currentUser
            .unlink(currentUser?.providerData[0]?.providerId)
            .then(() => {})
            .catch((error) => {
                console.log(error);
                // Handle Errors here.
                // ...
            });
    };

    return (
        <div className={styles.container}>
            <Header />
            This is Home page
            <button onClick={onGoogleSignIn}>Click on Google sign-in</button>
            <button onClick={onMurphyLogin}>sign in with Murphy</button>
            <button onClick={onTestLogin}>sign in Test Account</button>
            <button onClick={onShowCurrentUser}>Show Current User</button>
            <button onClick={onLinkCurrentUserToGoogle}>
                Link Current User to Google
            </button>
            <br />
            <p>Current User Display is: {currentUser?.displayName}</p>
            <p>Current User Email is: {currentUser?.email}</p>
            <button onClick={onUnLinkCurrentUSer}>
                Unlink Current User with Google
            </button>
        </div>
    );
};

export default Home;
