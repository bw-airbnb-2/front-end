import React from 'react'
import './User.css'

function User({user}) {

   return (
      <div className='userList'>
         <p>{user.name}</p>
         <p>{user.email}</p>
         <p>{user.phone}</p>
         <p>{user.password}</p>
      </div>
   )
}

export default User
