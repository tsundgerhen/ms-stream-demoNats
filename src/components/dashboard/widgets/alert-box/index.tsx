"use client";
import Header from "@/components/global/header";
import {
  Box,
  Stack,
  Card,
  Heading,
  HStack,
  Badge,
  Image,
} from "@chakra-ui/react";

export default function AlertBox() {
  const donations = [
    {
      id: "smallDonation",
      label: "Small Donation",
      amount: 1000,
      duration: 3,
      assets: [
        { label: "GIF", src: "/userProfile.jpg" },
        { label: "Audio", src: "/userProfile.jpg" },
      ],
    },
    {
      id: "mediumDonation",
      label: "Medium Donation",
      amount: 20000,
      duration: 5,
      assets: [
        { label: "GIF", src: "/spiningCat.gif" },
        { label: "Audio", src: "/spinningcat.mp3" },
      ],
    },
    {
      id: "bigDonation",
      label: "Big Donation",
      amount: 100000,
      duration: 8,
      assets: [
        { label: "GIF", src: "/rickroll.gif" },
        { label: "Audio", src: "/Rick-Roll-Sound.mp3" },
      ],
    },
  ];

  return (
    <>
      <Header />
      <Stack>
        {donations.map((donation) => (
          <Card.Root
            key={donation.id}  // Add the unique key prop here
            flexDirection="row"
            overflow="hidden"
            maxW="xl"
          >
            <Image
              objectFit="cover"
              maxW="200px"
              src={donation.assets[0].src}
              alt={donation.label + "GIF"}
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">{donation.label}</Card.Title>
                <Stack mt="4">
                  <Badge>{donation.amount}</Badge>
                  <Badge>{donation.duration}</Badge>
                </Stack>
              </Card.Body>
            </Box>
          </Card.Root>
        ))}
      </Stack>
    </>
  );
}