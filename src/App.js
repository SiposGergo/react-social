import PostList from "./PostList"
import PostDetails from "./PostDetails"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./Header"
// Uncomment to call real endpoints
import "./mock"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch >
          <Route path="/posts/:id">
            <PostDetails />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Redirect path="/" to="posts"></Redirect>
        </Switch>
      </Router>
      </>
  );
}

export default App;
