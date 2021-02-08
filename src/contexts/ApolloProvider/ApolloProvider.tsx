import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider as ApProvider } from "@apollo/react-hooks";

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app",
});
const ApolloProvider: React.FC = ({ children }) => {
  return <ApProvider client={client}>{children}</ApProvider>
}
export default ApolloProvider;