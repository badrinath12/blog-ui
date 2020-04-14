import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component{
    constructor(){
        super()
         this.state={
            posts : []
            
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
       .then((response)=>{
           //console.log(response)
           const posts= response.data
           this.setState({posts})
    })

     .catch((err) =>{
         console.log(err)
     })
    }                                 
    
    render(){
        return(
            <div>
                  
           
              { this.state.posts.length > 0 && (
             <div>
               <h1>Total Posts - {this.state.posts.length}</h1>
               <ul>
                {this.state.posts.map(post => {
                    return <li key={post.id}> <Link to={`/posts/${post.id}`}>{post.title}
                    </Link></li>
                })}
            </ul>
          </div> 
    )}
            
            </div>
        )
    }


}
export default  UsersList