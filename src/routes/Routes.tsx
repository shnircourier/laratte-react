import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticlesContainer from '../containers/ArticleContainer/ArticlesContainer';


const Routes: React.FC = () => {
   return (
      <Router>
         <Switch>
            <Route component={ArticlesContainer} path="/" />
         </Switch>
      </Router>
   );
}


export default Routes;