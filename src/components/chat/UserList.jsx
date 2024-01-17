import React, { useEffect, useState } from 'react'
 import chatList from './content/data'
import './css/userList.scss'

function UserList() {
  const [user , setUser] = useState(false)

  useEffect(() =>{
    // setUser(chatList)
  },[])

  if(!user){
    return(
      <div className="chat-list">
        <div className="blk no-user">
          <p className="info">Search for users</p>
          <p className="alert">No users</p>
        </div>
      </div>
    )
  }

  return (
    <div className='chat-list'>
      {
        chatList && chatList.map((item, index) =>{
          return(
            <div className="blk" key={index}>
              <div className="imgbx">
                <img src={item.image} alt="no image" style={{width:"10%"}}/>
              </div>
              
            </div>

          )
        })
      }
    </div>
  )
}

export default UserList