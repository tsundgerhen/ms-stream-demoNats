// pages/dashboard/layout.tsx
import React, { ReactNode, useState } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from '@/components/dashboard/sideMenu'; // Custom Sidebar

type LayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Flex direction="column" height="100vh">
      {/* Mobile Sidebar Toggle */}
      <IconButton
        aria-label="Toggle Sidebar"
        display={{ base: 'block', md: 'none' }}
        position="absolute"
        top={4}
        left={4}
        zIndex={10}
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Dashboard Layout */}
      <Flex flex="2" direction="row">
        {/* Sidebar */}
        <Box
          width={{ base: isSidebarOpen ? '60vw' : '0', md: '15vw' }} // Responsive width
          transition="width 0.3s ease"
          overflowX="hidden"
          position={{ base: 'absolute', md: 'relative' }}
          height="100vh"
          bg="gray.800"
          color="white"
          boxShadow="md"
        >
          <SideBar />
        </Box>

        {/* Main Content Area */}
        <Box flex="2"  overflowY="auto">
          {children} {/* Render the page-specific content here */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;