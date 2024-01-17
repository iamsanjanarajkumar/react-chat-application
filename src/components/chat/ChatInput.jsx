import React from 'react'
import './css/chatInput.scss'

function ChatInput() {
  return (
    <div className='chat-input'>
      <div className="plus-icon">
        <i className="bi bi-plus"></i>
      </div>
      <div className="input-box">
        <i className="bi bi-emoji-smile"></i>
        <input type="text" name='chat' id='chat' required />
      </div>
      <div className="send-icon">
        <i className="bi bi-send"></i>
      </div>
    </div>
  )
}

export default ChatInput