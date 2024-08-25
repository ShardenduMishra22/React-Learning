import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) 
    return <h1>Not logged in </h1>
  
  return (
    <div>
        <h1>Profile : {user.username}</h1>
    </div>
  )
}

export default Profile

// incorrect way 
    // const {username1,password1} = useContext(UserContext)

// correct way
    // const { user } = useContext(UserContext);
    // const { username1, password1 } = user;