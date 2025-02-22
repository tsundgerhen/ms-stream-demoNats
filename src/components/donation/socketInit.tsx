import { useState, useEffect, useRef } from "react";
import { Realtime } from "ably";

export function useSocket() {
  const ablyRef = useRef<Realtime | null>(null);
  const channelRef = useRef<any>(null);

  useEffect(() => {
    const initAbly = async () => {
      try {
        const ablyApiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY; // Ensure you have this key in your .env file

        if (!ablyApiKey) {
          console.error("🚨 Ably API key is missing!");
          return;
        }

        if (!ablyRef.current) {
          // Initialize the Ably client with the API key
          ablyRef.current = new Realtime({
            key: ablyApiKey,
          });

          // Get or create a reference to the "donations" channel
          channelRef.current = ablyRef.current.channels.get("donations");

          // Subscribe to the "donation" event
          channelRef.current.subscribe("donation", (message: any) => {
            console.log("Received donation:", message.data);
            // Perform actions based on the donation message
          });

          console.log("✅ Connected to Ably");
        }
      } catch (err) {
        console.error("🚨 Ably initialization failed:", err);
      }
    };

    initAbly();

    // Cleanup when the component is unmounted
    return () => {
      if (channelRef.current) {
        channelRef.current.unsubscribe();
      }
      if (ablyRef.current) {
        ablyRef.current.close();
      }
      console.log("❌ Disconnected from Ably");
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  return channelRef;
}

const DonationComponent = () => {
  const [donation, setDonation] = useState<any>(null);
  const channelRef = useSocket(); // Use the custom hook here

  useEffect(() => {
    if (channelRef.current) {
      // Subscribe to the "donation" event
      channelRef.current.subscribe("donation", (message: any) => {
        console.log("Donation message received:", message.data);
        setDonation(message.data); // Update donation state
      });
    }
  }, [channelRef]);

  return (
    <div>
      {donation && (
        <div>
          <p>{donation.name} donated {donation.amount}</p>
          <p>{donation.message}</p>
        </div>
      )}
    </div>
  );
};

export default DonationComponent;