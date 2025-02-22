import { useState } from "react";
import {
  Textarea,
  Input,
  Button,
  Box,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

type DonationBoxProps = {
  handleDonate: (name: string, amount: string, message: string) => void;
};

export default function DonationBox({ handleDonate }: DonationBoxProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>(1000);
  const [message, setMessage] = useState("");

  const amountChoices = [500, 1000, 5000, 10000, 20000];

  const handleAmountClick = (selectedAmount: number) => {
    setAmount(selectedAmount);
  };

  return (
    <Box bg="gray.900" rounded="xl" p={6} w="full" color="white"
    boxShadow={"0 0 15px rgba(0, 0, 0, 0.5)"}>
      <Text color="white" fontWeight="semibold" mb={2}>
        Donation Amount
      </Text>

      <HStack justify="center" textAlign="center" fontSize="2xl" color="white">
        <Input
          placeholder="0.00"
          value={amount ? String(amount) : ""}
          type="number"
          variant="flushed"
          colorScheme="blue"
          w="1/3"
          fontSize="2rem"
          textAlign="center"
          onChange={(e) => {
            const value = e.target.value;
            const numValue = parseFloat(value);
            if (value === "" || !isNaN(numValue)) {
              setAmount(parseFloat(value) || 0);
            }
          }}
        />
        <Text ml={3}>₮</Text>
      </HStack>

      <HStack mt={4} gap={4} justify="center">
        {amountChoices.map((amountChoice, index) => (
          <Text
            key={index}
            color="white"
            bg="gray.800"
            _hover={{ bg: "gray.700" }}
            p={5}
            rounded="2xl"
            w={24}
            textAlign="center"
            textStyle="sm"
            cursor="pointer"
            onClick={() => handleAmountClick(amountChoice)}
          >
            {amountChoice}₮
          </Text>
        ))}
      </HStack>

      <VStack mt={4} align="center">
        <Input
          value={name}
          colorScheme="blue"
          placeholder="Enter your name"
          color="white"
          _placeholder={{ color: "white", opacity: 1 }} // Ensure the placeholder is visible with full opacity
          _focus={{ borderColor: "white" }} // Focus state border color
          onChange={(e) => setName(e.target.value)}
          aria-label="Your Name"
        />

        <Textarea
          value={message}
          placeholder="Enter a message (Optional)"
          colorScheme="blue"
          variant="flushed"
          _placeholder={{ color: "white", opacity: 1 }} // Ensure the placeholder is visible with full opacity
          _focus={{ borderColor: "white" }} // Focus state border color
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Your Message"
          paddingLeft={3}
        />

        <Button
          mt={8}
          colorScheme="blue"
          onClick={() =>
            handleDonate(name, amount ? String(amount) : "", message)
          }
        >
          Send Donation
        </Button>
      </VStack>
    </Box>
  );
}