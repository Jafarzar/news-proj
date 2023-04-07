import React from "react";

import {
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useQuery } from "react-query";
import { getNews } from "@/utils/getNews";

const NewsSource = ({ source }: { source: string }) => {
  const { data, isLoading, isError, refetch } = useQuery(["news", source], () =>
    getNews({ source: source, key: "SOURCE" })
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error fetching news data.</p>;
  }

  return (
    <Stack w="full" py={24} spacing={20}>
      <Button onClick={() => refetch()}>refresh</Button>

      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={4}
        rowGap={{ base: 12, lg: 16 }}
      >
        {data?.articles.map((article) => (
          <GridItem key={article.url}>
            <Stack>
              <Image
                src={article.urlToImage}
                alt={article.title}
                height="342px"
              />
              <Text fontWeight="semibold" fontSize={{ base: "xs", lg: "md" }}>
                {article.publishedAt.slice(0, 10)}
              </Text>
              <Heading size={{ base: "md", lg: "lg" }} color="pink.500">
                {article.title}
              </Heading>
              <Text color="gray" fontSize={{ base: "xs", lg: "md" }}>
                {article.description}
              </Text>
              <Link
                color="pink.500"
                href={article.url}
                fontSize={{ base: "xs", lg: "md" }}
                target="_blank"
              >
                READ MORE
              </Link>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default NewsSource;
