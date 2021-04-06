import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleContainer from '../containers/ArticleContainer/ArticleContainer';
import ArticlesContainer from '../containers/ArticlesContainer/ArticlesContainer';


const Routes: React.FC = () => {
   return (
      <Router>
         <Switch>
            <Route component={ArticlesContainer} path="/" exact />
            <Route component={ArticleContainer} path="/articles/:id" />
         </Switch>
      </Router>
   );
}


export default Routes;