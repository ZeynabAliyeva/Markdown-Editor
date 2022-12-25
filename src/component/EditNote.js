import React from 'react'
import './style.css'
function EditNote({textarea,setTextarea}){
    console.log(textarea);
  return (
    
   <>
         <textarea rows={20} cols={100} value={textarea} onChange={(e)=>setTextarea(e.target.value)} placeholder="write here...."/>
   </>
  )
}

export default EditNote;