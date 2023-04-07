import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@fontsource/montserrat";
import { ReactQueryDevtools } from "react-query/devtools";

const theme = extendTheme({
  fonts: {
    heading: `"Montserrat", sans-serif;`,
    body: `"Montserrat", sans-serif;`,
  },
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
