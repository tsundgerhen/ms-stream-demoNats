"use client";

import { useState, useEffect, useRef } from "react";
import { connect, JSONCodec, NatsConnection } from "nats.ws";

import StreamerCard from "@/components/donation/streamerCard";
import TopDonatorsBox from "@/components/donation/topDonatorsBox";
import Header from "@/components/global/header";
import DonationBox from "./donationBox";
import { Box, Flex } from "@chakra-ui/react";

// Use a WebSocket URL instead of `nats://`
const NATS_URL = process.env.NEXT_PUBLIC_NATS_URL; 

// Function to set up the NATS connection
async function setupNATS() {
  try {
    const connectionOptions = {
      servers: NATS_URL, // Use WebSocket URL
    };

    const nc = await connect(connectionOptions);
    console.log("✅ Connected to NATS!");
    return nc;
  } catch (error) {
    console.error("❌ Error connecting to NATS:", error);
    return null;
  }
}

export default function DonationIndex() {
  const ncRef = useRef<NatsConnection | null>(null);
  const jc = JSONCodec();

  // Donation data with corresponding assets
  const donations = [
    {
      id: "smallDonation",
      label: "Small Donation",
      amount: 1000,
      duration: 3,
      assets: [
        { label: "GIF", src: "https://i.giphy.com/LdOyjZ7io5Msw.webp" },
        { label: "Audio", src: "/cha-ching.mp3" },
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

  useEffect(() => {
    let isMounted = true; // To prevent memory leaks

    const connectToNats = async () => {
      ncRef.current = await setupNATS();
      if (ncRef.current) console.log("✅ NATS Connected");
    };

    connectToNats();

    return () => {
      isMounted = false;
      if (ncRef.current) {
        ncRef.current.close();
        console.log("✅ NATS connection closed");
      }
    };
  }, []);

  const handleDonate = (name: string, amount: string, message: string) => {
    const amountNumber = Number(amount);
    let donationGIF = "";
    let donationSound = "";
    let duration = 3;

    const matchingDonation = donations
      .filter((donation) => donation.amount <= amountNumber)
      .pop();

    if (matchingDonation) {
      donationGIF = matchingDonation.assets[0].src;
      donationSound = matchingDonation.assets[1].src;
      duration = matchingDonation.duration;
    }

    if (name && amount && ncRef.current) {
      // Publish donation data to NATS
      const donationData = {
        name,
        amount,
        message,
        donationGIF,
        donationSound,
        duration,
      };

      try {
        ncRef.current.publish("donation", jc.encode(donationData));
        console.log("✅ Donation sent to NATS:", donationData);
      } catch (error) {
        console.error("❌ Error publishing donation to NATS:", error);
      }
    } else {
      console.error("❌ NATS connection not initialized or missing donation details.");
    }
  };

  return (
    <Box
      h="100vh"
      w="full"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgGradient="to-b"
      gradientFrom="red.800"
      gradientTo="gray.900"
    >
      <Header />

      {/* Main Content */}
      <Flex w="75%" justify="center" mt={16} gap={9} mx="auto">
        {/* Left Column */}
        <Flex w="33%" flexDirection="column" gap={6}>
          <StreamerCard />
          <TopDonatorsBox />
        </Flex>

        {/* Right Column */}
        <Box w="66%">
          <DonationBox handleDonate={handleDonate} />
        </Box>
      </Flex>
    </Box>
  );
}