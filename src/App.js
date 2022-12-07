import { useState } from 'react';
import './App.css';

function App() {

  const [emoji,setEmoji]=useState("🏆")

  return (
   <>
   <div className='container'>
          😍Emoji Kit😍 
   </div>

   <div className='main-emoji-container'>
         <div className='main-emoji'>
         {emoji}
         </div>
  
   </div>
   <div className='emoji-container'> 
     <div className='emoji-item'onClick={()=>{setEmoji('🏆')}}>🏆</div>
      <div className='emoji-item'onClick={()=>{setEmoji('✌')}}>✌</div>
        <div className='emoji-item'onClick={()=>{setEmoji('😊')}}>😊</div>
       <div className='emoji-item'onClick={()=>{setEmoji('😻')}}>😻</div>
      <div className='emoji-item'onClick={()=>{setEmoji('🍰')}}>🍰</div>
    </div>
   </>
  );
}

export default App;
