import React,{ lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
const Authors = lazy(() => import('./pages/Authors'))
const Home = lazy(() => import('./pages/Home'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const Media = lazy(() => import('./pages/Media'))
const PageNew = lazy(() => import('./pages/PageNew'))
const PostNew = lazy(() => import('./pages/PostNew'))
const User = lazy(() => import('./pages/User'))
const FourZeroFour = lazy(() => import('./pages/FourZeroFour'))

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
      <Route path="/admin/dashboard/:userName" component={Dashboard} />
      <Route path="/admin/post-new/" component={PostNew} />
      <Route path="/admin/page-new/" component={PageNew} />
      <Route path="/admin/media/" component={Media} />
      <Route path="/admin/users/" component={User} />
      <Route component={FourZeroFour} />
    </Switch>
  </Router>
  </Suspense>
    </div>
  )
}

export default App
