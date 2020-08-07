import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import EditProfile from './components/Users/EditProfile/EditProfile';
import PostsPage from './components/PostsPage';
import SubmitPostPage from './components/SubmitPostPage';
import PostPage from './components/PostPage';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/* Will eventually need this to be /profile/:id */}
          {/* <Route path="/profile" component={Profile}></Route> */}
          <Route exact path='/profile/edit' component={EditProfile}></Route>
          <Route path='/post/:id' component={PostPage}></Route>
          <Route path='/posts' component={PostsPage}></Route>
          <Route path='/submit' component={SubmitPostPage}></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}
export default App;
