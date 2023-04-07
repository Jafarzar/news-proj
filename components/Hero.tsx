import { Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <Flex
      justify="space-between"
      width="100%"
      alignItems="center"
      direction={{ base: "column-reverse", lg: "row" }}
      gap={10}
    >
      <Stack maxW="650px" w="full" spacing={{ base: 6, lg: 10 }}>
        <Stack spacing={{ base: 0, lg: 5 }}>
          <Heading
            fontWeight="bold"
            color="pink.500"
            size={{ base: "lg", lg: "2xl" }}
          >
            Blog Posts
          </Heading>
          <Heading
            fontWeight="medium"
            size={{ base: "lg", lg: "2xl" }}
            color="gray.600"
          >
            I think so, this is it.
          </Heading>
        </Stack>
        <Text color="gray" fontSize={{ base: "xs", lg: "md" }}>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </Text>
        <HStack
          w="full"
          h={{ base: "42px", lg: "60px" }}
          spacing={{ base: 2, lg: 4 }}
        >
          <Button
            variant="unstyled"
            bg="twitter.500"
            borderRadius={0}
            color="white"
            w="full"
            h="full"
            leftIcon={<FaTwitter />}
            iconSpacing={{ base: 2, lg: 4 }}
            fontSize={{ base: "8px", lg: "xs" }}
            fontWeight="light"
          >
            TWITTER
          </Button>
          <Button
            variant="unstyled"
            bg="linkedin.700"
            borderRadius={0}
            color="white"
            w="full"
            h="full"
            leftIcon={<FaLinkedin />}
            iconSpacing={{ base: 2, lg: 4 }}
            fontSize={{ base: "8px", lg: "xs" }}
            fontWeight="light"
          >
            LINKEDIN
          </Button>
          <Button
            variant="unstyled"
            bg="black"
            borderRadius={0}
            color="white"
            w="full"
            h="full"
            leftIcon={<SiMedium />}
            iconSpacing={{ base: 2, lg: 4 }}
            fontSize={{ base: "8px", lg: "xs" }}
            fontWeight="light"
          >
            MEDIUM
          </Button>
        </HStack>
      </Stack>

      <Flex
        position="relative"
        w={{ base: "220px", lg: "400px" }}
        h={{ base: "200px", lg: "360px" }}
      >
        <Image src="/img/heroimg.svg" alt="hero" fill />
      </Flex>
    </Flex>
  );
}

export default Hero;
