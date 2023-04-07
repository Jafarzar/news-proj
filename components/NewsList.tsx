import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useQuery } from "react-query";
import { NewsCategory, getNews } from "@/utils/getNews";
import Image from "next/image";

const NewsList = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<NewsCategory>("general");

  const { data, isLoading, isError, refetch } = useQuery(
    ["news", selectedCategory],
    () => getNews({ category: selectedCategory, key: "CATEGORY" })
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>Error fetching news data.</Text>;
  }

  const categories: NewsCategory[] = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <Stack w="full" py={24} spacing={20}>
      <Button onClick={() => refetch()}>refresh</Button>
      <Tabs colorScheme="pink">
        <TabList
          borderBottom="transparent"
          gap={6}
          overflowX={{ base: "scroll", lg: "hidden" }}
          overflowY="hidden"
          height={12}
          marginBottom={10}
        >
          {categories.map((category) => (
            <Tab
              key={category}
              onClick={() => setSelectedCategory(category)}
              isSelected={selectedCategory === category}
              _selected={{ color: "pink.700", fontWeight: "bold" }}
            >
              {category.toUpperCase()}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {categories.map((category) => (
            <TabPanel p={0} key={category}>
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
                        height={342}
                      />
                      <Text
                        fontWeight="semibold"
                        fontSize={{ base: "xs", lg: "md" }}
                      >
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
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default NewsList;
