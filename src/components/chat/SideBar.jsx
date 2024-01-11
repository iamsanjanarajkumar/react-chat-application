import React from 'react'
import HeaderMenu from './HeaderMenu'
import SearchUser from './SearchUser'
import UserList from './UserList'

function SideBar() {
  return (
    <div>
       <HeaderMenu/>
       <SearchUser/>
       <UserList/>  
    </div>
  )
}

export default SideBar