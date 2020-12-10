import React,{ lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import Authors from './pages/Authors';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const FourZeroFour = lazy(() => import('./pages/FourZeroFour'))
const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <div className="app user-select-none">
      <Suspense fallback={<Loader/>}>
      <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post/:slug" component={BlogDetail} />
      <Route path="/authors" component={Authors} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard/:userName" component={Dashboard} />
      <Route component={FourZeroFour} />
    </Switch>
  </Router>
  </Suspense>
    </div>
  )
}

export default App
