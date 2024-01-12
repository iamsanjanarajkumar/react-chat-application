import React from 'react'
import ChatContainer from './../chat/ChatContainer';
import './Home.scss'

function Home(props) {
  return (
    <div className='app-body'>
      <ChatContainer/>
    </div>
  )
}

export default Home