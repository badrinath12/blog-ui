import React from 'react' 
import axios from 'axios'
import {Link} from 'react-router-dom'


class PostShow extends React.Component {
    constructor(){
        super()
        this.state ={
           post:{},           
           user:{},
           comments:[]
        }
    }
   
     componentDidMount(){
         setTimeout(()=>{
         const id =this.props.match.params.id
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((response)=>{
             const post= response.data
             this.setState({post})
                  axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
                 .then((response)=>{
                   console.log(response.data)
                   const user= response.data
                    this.setState({user})
         })
         })
         .catch((err) =>{
            console.log(err)
        })

        

          .catch((err) =>{
            console.log(err)
        })
        },2000)
        
        const id =this.props.match.params.id
         axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
         .then((response)=>{
         const comments= response.data
         this.setState({comments})
         })
         .catch((err) =>{
            console.log(err)
        })
        

                  
     }

    render() {
        console.log(this.props)
        return (
            <div> 
                <h2>User Name : {this.state.user.name}</h2>
                <h4>Title : {this.state.post.title} </h4>
                <h4>Body : {this.state.post.body} </h4>

                <h4>Comments </h4>

                 <ul>{
                    this.state.comments.map(comment=>{
                    return <li key={comment.id}>{comment.body} </li>
                     } )}
                    </ul> 

                    <Link to={`/users/${this.state.user.id}`} >More posts of the authors</Link>                
                    
            </div> 
        )
    }
}

export default PostShow