import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authors  from './pages/Authors'
import Home  from './pages/Home'
import BlogDetail  from './pages/BlogDetail'
import Dashboard  from './pages/Dashboard'
import Login  from './pages/Login'
import Media  from './pages/Media'
import PageNew  from './pages/PageNew'
import PostNew  from './pages/PostNew'
import User  from './pages/User'
import FourZeroFour  from './pages/FourZeroFour'
import Contact from './pages/Contact';
import AppProvider from './context/AppProvider';
const App = () => {
  return (
    <div className="app user-select-none">
      <Router>
      <AppProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post/:slug" component={BlogDetail} />
      <Route path="/authors" component={Authors} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/post-new/" component={PostNew} />
      <Route path="/admin/page-new/" component={PageNew} />
      <Route path="/admin/media/" component={Media} />
      <Route path="/admin/users/" component={User} />
      <Route component={FourZeroFour} />
    </Switch>
    </AppProvider>
  </Router>
    </div>
  )
}

export default App
