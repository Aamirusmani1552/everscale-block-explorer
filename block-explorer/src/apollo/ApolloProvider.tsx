"use client";

import React, { ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface Props {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_EVERCLOUD_MAINNET_URL!,
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = ({ children }: Props) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloProviderWrapper;
