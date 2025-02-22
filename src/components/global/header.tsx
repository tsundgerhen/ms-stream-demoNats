import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="full"
      bg="black"
      p={4}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    >
      {/* Left side logo */}
      <Image alt="Logo" src="/Logo-transparent.png" boxSize="60px" />

      {/* Right side user profile image */}
      <Box>
        <Image
          alt="User Profile"
          src="/userProfile.jpg"
          boxSize="40px"
          borderRadius="full"
          border="1px solid"
          borderColor="gray.300"
        />
      </Box>
    </Box>
  );
}
