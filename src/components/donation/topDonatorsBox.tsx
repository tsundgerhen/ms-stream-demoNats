import React from "react";

import { For, SimpleGrid, Tabs, Text, Image, Box } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";

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
    <SimpleGrid columns={2} gap="4"  mt={4} display="flex" flexDirection="column">
      <Text fontWeight="bold" fontSize="lg" mb={1} color="white">
        Top Donators
      </Text>
      <Tabs.Root defaultValue={tabs[0].label} variant={"line"} bgGradient="to-t" gradientFrom="red.800" gradientTo="gray.900"
      boxShadow={"0 0 15px rgba(0, 0, 0, 0.5)"}>
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab.id} value={tab.label}>
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content value={tab.label}>
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
                    {user.name}
                  </Text>
                  <Text color="gray.400">${user.amount}</Text>
                </Box>
              </Box>
            ))}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </SimpleGrid>
  );
}
