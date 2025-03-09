import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import DashboardLayout from "./dashboard/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname; // ✅ Get full pathname

  return (
    <ChakraProvider>
      {pathname.startsWith("/dashboard") ? ( // ✅ Check if in dashboard
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}