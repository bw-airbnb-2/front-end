import React from 'react'
import './User.css'

function User({user}) {

   return (
      <div className='userList'>
         <p>name: {user.name}</p>
         <p>email: {user.email}</p>
         <p>phone#: {user.phone}</p>
         <p>pw: {user.password}</p>
      </div>
   )
}

export default User
