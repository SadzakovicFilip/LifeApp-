// import '@/styles/globals.css'
import SharedLayout from "@/components/SharedLayouts/sharedLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  );
}
