import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Auth, Hub } from 'aws-amplify';
// import awsconfig from './aws-exports';
import { withOAuth } from 'aws-amplify-react'; 

const OAuthButton = (props: any) => {
    return (
      <button onClick={props.OAuthSignIn}>
        Sign in with AWS
      </button>
    )
}

const AuthButton = withOAuth(OAuthButton);

const oauth = {
  domain: 'test-federation.auth.us-east-2.amazoncognito.com',
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'http://localhost:3000/',
  redirectSignOut: 'http://localhost:3000/',
  responseType: 'code'
};



Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      
      // REQUIRED - Amazon Cognito Region
      region: process.env.REACT_APP_COGNITO_REGION,

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: process.env.REACT_APP_COGNITO_IDENITY_REGION,

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: process.env.REACT_APP_COGNITO_USER_POOL_WEB_ID,
  }
});
Auth.configure({ oauth });

const App: React.FC = (props: any) => {

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log({event, data})
    });
    Auth.currentAuthenticatedUser()
      .then(user => console.log({user}))
      .catch(() => console.log("Not signed in"));
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AuthButton/>
      <button onClick={() => Auth.signOut()}>Sign out</button>
    </div>
  );
}

export default withOAuth(App);