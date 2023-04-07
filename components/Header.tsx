import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
import { getSources } from "@/utils/getSources";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useQuery("source", getSources);

  return (
    <Flex justify="space-between" width="full" align="center">
      <Link href="/">
        <Heading size="lg">Logo logoan</Heading>
      </Link>
      <HStack spacing={5} display={{ base: "none", lg: "block" }}>
        {data?.sources.slice(0, 5).map((source) => (
          <Link key={source.id} href={`/source/${source.id}`}>
            <Button variant="link" size="xs">
              {source.name}
            </Button>
          </Link>
        ))}
      </HStack>
      <Button
        onClick={onOpen}
        variant="unstyled"
        display={{ base: "block", lg: "none" }}
      >
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading size="lg">Logo logoan</Heading>
          </DrawerHeader>

          <DrawerBody p={10}>
            <Stack spacing={5} alignItems="start">
              {data?.sources.slice(0, 9).map((source) => (
                <Button key={source.id} variant="link">
                  {source.name}
                </Button>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
