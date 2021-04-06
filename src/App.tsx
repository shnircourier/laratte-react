import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import Routes from './routes/Routes';

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
