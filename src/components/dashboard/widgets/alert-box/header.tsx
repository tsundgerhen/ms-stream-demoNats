'use client';

import { Box, Button, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import { FaPlus } from 'react-icons/fa6';
import { Alert } from '@/types/alertType';

export default function Header() {
  return (
    <Box
      display='flex'
      flexDir='column'
      alignItems='start'
      height='auto'
      w='100%'
      bg='#282B38'
      p={4}
      px='20px'
      m={0}
      justifyContent='flex-start' // ✅ Corrected
    >
      <Text fontSize={'2xl'} fontWeight={"bold"} color={'white'}>
        My Alert Box Widgets
      </Text>
      <Text fontSize={'md'} color='#9397A2' mb={"2"}>
        Add and configure alert boxes to display donation, follow, subscription and host alerts to
        yourstream. You can add as many as you like.
      </Text>
      <Button bg={'red.600'} color={"white"} px={"3"} fontSize={"md"} size={"sm"} borderRadius={"none"}>
        <Box p={0} pr={"2"}>
          <FaPlus />
        </Box>
        Add a new Alert Box Widgets
      </Button>
    </Box>
  );
}
