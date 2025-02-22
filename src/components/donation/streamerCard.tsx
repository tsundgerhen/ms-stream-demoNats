import React from "react";
import {
  Box,
  Image,
  Button,
  VStack,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

export default function StreamerCard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="sm"
      p={8}
      rounded="lg"
      alignItems="center"
      bgGradient="to-t"
      gradientFrom="red.800"
      gradientTo="gray.900"
      boxShadow={"0 0 15px rgba(0, 0, 0, 0.5)"}
    >
      <Box display="flex" justifyContent="center" alignItems="center" w="full">
        <Image
          alt="User Image"
          src="/userProfile.jpg"
          boxSize="90px"
          borderRadius="full"
          border="2px solid"
          borderColor="gray.300"
        />
      </Box>
      <VStack textAlign="center" mt={4}>
        <Text fontSize="4xl" fontWeight="bold" color="white" textShadow="lg">
          Tsundgerhen
        </Text>
      </VStack>
      <HStack mt={4} alignItems="center">
        <FaYoutube size={24} color="white" />
        <Link
          href="https://youtube.com/@tsundgerhen-kiun6969?si=AIqdJXdPUNkzbQ_g"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security measure
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          <Text maxW="12rem" truncate color="white">
            https://youtube.com/@tsundgerhen-kiun6969?si=AIqdJXdPUNkzbQ_g
          </Text>
        </Link>
      </HStack>
    </Box>
  );
}
