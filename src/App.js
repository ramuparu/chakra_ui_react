import './App.css';
import {Heading,VStack,IconButton,useColorMode} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';


function App() {
  
const [todos,setTodos] = useState(()=> JSON.parse(localStorage.getItem('todos')) || [])

useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
},[todos])

const deleteTodos = (id)=>{
   const filterTodo = todos.filter(todo=>todo.id !== id)
   setTodos(filterTodo)
}

const whenUserClickAddTodos = (todo)=>{
   setTodos([...todos,todo])
}

const {colorMode,toggleColorMode} = useColorMode()

console.log(colorMode)

  return (
    <VStack>
      <IconButton icon={colorMode === "light" ? <FaSun /> : <FaMoon />} size='lg' alignSelf='flex-end' isRound='true' onClick={toggleColorMode} />
    <Heading size="2xl" mb="8" fontWeight="extrabold" bgGradient="linear(to-r , pink.500,pink.300,blue.500)" bgClip="text">ToDo Application</Heading>
    <TodoList todos={todos} deleteTodos={deleteTodos} />
    <AddTodo whenUserClickAddTodos={whenUserClickAddTodos} />
    </VStack>
  );
}

export default App;
