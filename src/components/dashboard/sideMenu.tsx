'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { IoAnalytics } from 'react-icons/io5';
import { FaRegUserCircle, FaDonate, FaChartBar, FaPhoneAlt } from 'react-icons/fa';
import {
  MdEventNote,
  MdHistory,
  MdCrisisAlert,
  MdFlag,
  MdOutlineShowChart,
  MdOutlineLiveHelp,
} from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';

const menuItems = {
  dashboard: [
    { title: 'Analytics', url: '/dashboard', icon: IoAnalytics },
    { title: 'My Account', url: '/dashboard/my-account', icon: FaRegUserCircle },
    { title: 'Events', url: '/dashboard/events', icon: MdEventNote },
  ],
  donations: [
    { title: 'Settings', url: '/dashboard/donations/settings', icon: CiSettings },
    { title: 'History', url: '/dashboard/donations/history', icon: MdHistory },
    { title: 'Bank Transfers', url: '/dashboard/donations/bank-transfers', icon: MdHistory },
  ],
  widgets: [
    { title: 'Alert Box', url: '/dashboard/widgets/alert-box', icon: MdCrisisAlert },
    { title: 'Top & Last', url: '/dashboard/widgets/top-last', icon: FaChartBar },
    { title: 'Goals', url: '/dashboard/widgets/goals', icon: MdFlag },
    {
      title: 'Counters & Totals',
      url: '/dashboard/widgets/counters-totals',
      icon: MdOutlineShowChart,
    },
  ],
  help: [
    { title: 'Help Center', url: '/dashboard/help-center', icon: MdOutlineLiveHelp },
    { title: 'Contact', url: '/dashboard/contact', icon: FaPhoneAlt },
  ],
};

export default function SideBar() {
  const baseUrl = usePathname();
  const router = useRouter();
  const handleNavigation = (url: string) => {
    router.push(url);
  };

  const categories = Object.keys(menuItems) as Array<keyof typeof menuItems>;

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      h='100vh'
      bg='gray.800'
      borderRight='1px'
      borderColor='gray.600'
      boxShadow='lg'
      transition='width 0.4s ease'
      width={'220px'}
      p={4}>
      <Flex direction='column' align='flex-start' w='full' gap={4}>
        {categories.map((category) => (
          <Box key={category}>
            {/* Category Title */}
            <Text fontSize='md' fontWeight='bold' color='gray.300' mb={2}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>

            {/* Category Items */}
            {menuItems[category].map((item, idx) => (
              <Flex
                key={idx}
                align='center'
                cursor='pointer'
                px={2}
                transition='all 0.4s'
                _hover={{ bg: 'gray.700' }}
                onClick={() => handleNavigation(item.url)}>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  w={7}
                  h={7}
                  borderRadius='md'
                  bg={item.url === baseUrl ? 'red.500' : 'transparent'}
                  boxShadow={item.url === baseUrl ? '0px 2px 10px rgba(0,0,0,0.2)' : 'none'}>
                  <Icon
                    as={item.icon}
                    w={4}
                    h={4}
                    color={item.url === baseUrl ? 'white' : 'gray.400'}
                  />
                </Box>
                <Text ml={4} fontSize='sm' color='white' transition='all 0.5s'>
                  {item.title}
                </Text>
              </Flex>
            ))}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
