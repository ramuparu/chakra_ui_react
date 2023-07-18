import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

const TodoList = ({todos,deleteTodos}) => {

    if(!todos.length) {
        return (
            <Badge colorScheme='pink' borderRadius="lg" p="4" m="8">
                No Todos Yay!
            </Badge>
        )
    }
    return (
        <VStack p="4" divider={<StackDivider />} borderColor="grey.200" borderWidth="medium" borderRadius="2xl" w="100%" maxW={{ base: '90vw', sm: "80vw", lg: "50vw", xl: "40vw" }} alignItems="stretch">
            {todos.map(todo => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound="true" onClick={()=>deleteTodos(todo.id)} />
                </HStack>
            ))}

        </VStack>
    )
}

export default TodoList
