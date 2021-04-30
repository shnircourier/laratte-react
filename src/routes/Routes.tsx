import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleContainer from '../containers/ArticleContainer/ArticleContainer';
import ArticlesContainer from '../containers/ArticlesContainer/ArticlesContainer';
import Layout from '../containers/Layout/Layout';
import SignIn from '../containers/SignIn/SignIn';


const Routes: React.FC = () => {
   return (
      <Router>
         <Layout>
            <Switch>
               <Route component={ArticlesContainer} path="/" exact />
               <Route component={ArticleContainer} path="/articles/:id" />
               <Route component={SignIn} path="/signin" exact />
            </Switch>
         </Layout>
      </Router>
   );
}


export default Routes;