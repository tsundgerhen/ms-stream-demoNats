"use client";

import { useState, useEffect, useRef } from "react";
import { connect, JSONCodec, NatsConnection, Subscription } from "nats.ws";
import { Image, Box, Text } from "@chakra-ui/react";

// Ensure NATS_URL is defined in your `.env.local`
const NATS_URL = /*process.env.NEXT_PUBLIC_NATS_URL ||*/ "wss://demo.nats.io:8443"; // Fallback if undefined

async function setupNATS() {
  try {
    const nc = await connect({ servers: NATS_URL });
    console.log("✅ Connected to NATS!");
    return nc;
  } catch (error) {
    console.error("❌ Error connecting to NATS:", error);
    return null;
  }
}

interface DonationData {
  name: string;
  amount: number;
  message: string;
  donationGIF: string;
  donationSound: string;
  duration: number;
}

const DonationAlertIndex = () => {
  const [donation, setDonation] = useState<DonationData | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ncRef = useRef<NatsConnection | null>(null);
  const subRef = useRef<Subscription | null>(null); // FIX: Define `subRef`
  const jc = JSONCodec();

  useEffect(() => {
    let isMounted = true;

    const connectToNats = async () => {
      try {
        ncRef.current = await setupNATS();
        if (!ncRef.current) return;

        console.log("✅ NATS Connected");

        const sub = ncRef.current.subscribe("donation");
        subRef.current = sub;

        (async () => {
          for await (const msg of sub) {
            if (!isMounted) return;
            const donationData = jc.decode(msg.data) as DonationData;
            console.log("🎉 Received donation:", donationData);
            setDonation(donationData);

            // Play donation sound
            if (donationData.donationSound) {
              if (!audioRef.current) {
                audioRef.current = new Audio();
              }
              audioRef.current.src = donationData.donationSound;
              audioRef.current.load();
              audioRef.current.play().catch((error) => console.error("🔊 Error playing sound:", error));

              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
                }
              }, donationData.duration * 1000);
            }

            setTimeout(() => setDonation(null), donationData.duration * 1000);
          }
        })();
      } catch (error) {
        console.error("❌ NATS Connection Error:", error);
      }
    };

    connectToNats();

    return () => {
      isMounted = false;
      subRef.current?.unsubscribe();
      ncRef.current?.close();
    };
  }, []);

  return (
    <Box
      bg="transparent"
      h="auto"
      w="full"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {donation && (
        <>
          <Image src={donation.donationGIF} alt="Donation GIF" w="full" h="500px" />
          <Text color="yellow.300" textAlign="center" fontSize="4xl" fontWeight="bold" pt="40px">
            {donation.name} just donated {donation.amount}₮
          </Text>
          <Text color="white" textAlign="center" fontSize="4xl" fontWeight="bold" pt="10px">
            {donation.message}
          </Text>
        </>
      )}
    </Box>
  );
};

export default DonationAlertIndex;