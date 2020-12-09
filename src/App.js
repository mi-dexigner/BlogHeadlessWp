import React,{ lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const FourZeroFour = lazy(() => import('./pages/FourZeroFour'))
const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div className="progress">
      <div className="indeterminate"></div>
  </div>}>
      <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blogs/:id" component={BlogDetail} />
      <Route component={FourZeroFour} />
    </Switch>
  </Router>
  </Suspense>
    </div>
  )
}

export default App
