import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {nanoid} from "nanoid"

const AddTodo = ({whenUserClickAddTodos}) => {
  const toast = useToast()
  const whenSubmittingTodos = (e)=>{
     e.preventDefault()
     if(!content){
      toast({
        title : "No content",
        duration : 2000,
        isClosable : true,
        status : "success"
      })
      return
     }
     const todos = {
      id :nanoid(),
      body : content
     }
     whenUserClickAddTodos(todos)
     setContent('')
  }
  const [content,setContent] = useState('')

  return (
    <form onSubmit={whenSubmittingTodos}>
   <HStack mt="4">
      <Input variant="filled" placeholder='search todo' value={content} onChange={(e)=>setContent(e.target.value)} />
      <Button colorScheme='pink' px='8' type="submit">AddTodo</Button>
   </HStack>
   </form>
  )
}

export default AddTodo
