import React from 'react' 
import Home from './Home'
import UserList from './UserList'
import UserShow from './UserShow'
import PostList from './PostList'
import PostShow from './PostShow'


import { BrowserRouter, Route, Link } from 'react-router-dom'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                
                <Link to="/">Home |</Link>
                <Link to="/users">Users |</Link> 
                <Link to="/posts">Posts</Link>
                
               
            
                <Route path="/" component={Home} exact={true} />
               
                <Route path="/users" component={UserList} exact={true} />
                <Route path="/posts" component={PostList} exact={true}/>

                <Route path="/users/:id" component={UserShow} />
                <Route path="/posts/:id" component={PostShow} />
                
            </div>
        </BrowserRouter>
    )
}

export default App
