import Head from "next/head";
import Header from "@/components/Header";
import { Container, Image, VStack } from "@chakra-ui/react";
import NewsSource from "@/components/NewsSource";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { sourceId } = router.query;

  return (
    <>
      <Head>
        <title>Zeppelins</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl">
        <VStack
          spacing={{ base: 16, lg: 36 }}
          paddingTop={{ base: 6, lg: 10 }}
          paddingBottom={{ base: 12, lg: 24 }}
          px={2}
        >
          <Header />
          <NewsSource source={sourceId as string} />
          <Image
            src="/img/footerlogo.svg"
            alt="footer"
            width={{ base: "150px", lg: "300px" }}
          />
        </VStack>
      </Container>
    </>
  );
}