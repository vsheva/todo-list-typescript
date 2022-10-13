import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './components/AboutPage';
import { TodoPage } from './components/TodoPage';

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path="/" exact />
          <Route component={AboutPage} path="/about" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
