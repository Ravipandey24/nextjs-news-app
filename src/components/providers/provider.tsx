// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./DataContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <DataProvider>{children}</DataProvider>
    </ChakraProvider>
  );
}
