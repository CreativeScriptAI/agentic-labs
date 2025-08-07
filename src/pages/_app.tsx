import { AppPropsWithLayout } from "../types";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "src/layouts";
import { queryClient } from "src/libs/react-query";
import { mondwest, neuebit } from "src/assets/fonts";
import "src/styles/globals.css";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={`${mondwest.variable} ${neuebit.variable}`}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </HydrationBoundary>
      </QueryClientProvider>
    </div>
  );
}

export default App;
