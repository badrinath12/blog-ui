import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component{
    constructor(){
        super()
         this.state={
            users : []
            
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
       .then((response)=>{
           //console.log(response)
           const users= response.data
           this.setState({users})
    })

     .catch((err) =>{
         console.log(err)
     })
    }                                 
    
    render(){
       // console.log(this.state.users[0].name)
        return(
            <div>
                  
           
              { this.state.users.length > 0 && (
             <div>
               <h1>Listing Users - {this.state.users.length}</h1>
               <ul>
                {this.state.users.map(user => {
                    return <li key={user.id}> <Link to={`/users/${user.id}`}>{user.name}
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