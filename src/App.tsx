import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import ArticlesContainer from './containers/ArticleContainer/ArticlesContainer';

function App() {
  return (
    <Layout>
      <ArticlesContainer />
    </Layout>
  );
}

export default App;
