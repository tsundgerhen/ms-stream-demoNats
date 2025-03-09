// pages/dashboard/index.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const DashboardHome = () => {
  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to the Dashboard
      </Heading>
      <Text fontSize="lg">
        This is the home page of your dashboard. You can access analytics, settings, and more from the sidebar.
      </Text>
    </Box>
  );
};

export default DashboardHome;