import React from "react";
import { Box, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Image } from "@chakra-ui/react";

export default function TopDonatorsBox() {
  const tabs = [
    {
      id: "day",
      label: "Day",
      users: [
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 300 },
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 500 },
      ],
    },
    {
      id: "week",
      label: "Week",
      users: [
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 3000 },
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 5000 },
      ],
    },
    {
      id: "month",
      label: "Month",
      users: [
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 30000 },
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 50000 },
      ],
    },
    {
      id: "all_time",
      label: "All Time",
      users: [
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 300000 },
        { name: "Tsundgerhen", photo: "/userProfile.jpg", amount: 500000 },
      ],
    },
  ];

  return (
    <SimpleGrid columns={2} gap="4" mt={4} display="flex" flexDirection="column">
      <Text fontWeight="bold" fontSize="lg" mb={1} color="white">
        Top Donators
      </Text>
      <Tabs variant="line">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.id}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.id}>
              {tab.users.map((user, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  gap={3}
                  p={2}
                  borderBottom="1px solid"
                  borderColor="gray.700"
                >
                  <Image
                    src={user.photo}
                    alt={user.name}
                    boxSize={10}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="gray.300"
                  />
                  <Box>
                    <Text color="white" fontWeight="semibold">
                      {user.name
                      }</Text>
                    <Text color="gray.400">${user.amount}</Text>
                  </Box>
                </Box>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </SimpleGrid>
  );
}
