import React from 'react'
import ChatContainer from './../chat/ChatContainer';
import './Home.scss'
import env from 'react-dotenv'

function Home(props) {
  return (
   
    <div className='app-body'>
      {/* <ChatContainer/> */}
      <h1>{env.PROJECT_ID}</h1>
    </div>
  )
}

export default Home