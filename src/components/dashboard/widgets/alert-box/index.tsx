'use client';

import { Box, Button, Text } from '@chakra-ui/react';
import alertData from '@/components/alert.json';
import { useState } from 'react';
import Header from './header';
import AlertList from './alertList';
import { Alert } from '@/types/alertType';

export default function AlertPage() {
  const [alerts, setAlerts] = useState<Alert[]>(alertData.alerts);

  return (
    <Box display={'flex'} flexDir={'column'} alignItems={'center'} w="100%" minH="100vh">
      <Header />
      <Box
        bg="#2B303E"
        w="100%"
        flex="1" // Takes up remaining space instead of forcing 100vh
        display="flex"
        alignItems="start"
        justifyContent="center"
      >
        {alerts.length > 0 ? <AlertList alerts={alerts} /> : <Text color="black">No alerts available</Text>}
      </Box>
    </Box>
  );
}
