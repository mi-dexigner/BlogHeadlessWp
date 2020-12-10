import React,{ lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const FourZeroFour = lazy(() => import('./pages/FourZeroFour'))
const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loader/>}>
      <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:slug" component={BlogDetail} />
      <Route component={FourZeroFour} />
    </Switch>
  </Router>
  </Suspense>
    </div>
  )
}

export default App
