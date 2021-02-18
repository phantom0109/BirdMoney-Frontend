import React from 'react';
import { UseWalletProvider } from 'use-wallet';
import EggProvider from './EggProvider';
import ApolloProvider from './ApolloProvider';
import FarmsProvider from './Farms'
import ModalsProvider from './Modals'
import TransactionProvider from './Transactions'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
    <UseWalletProvider
      chainId={42}
      connectors={{
        walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
      }}
    >
      <ApolloProvider>
        <EggProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </EggProvider>
      </ApolloProvider>
    </UseWalletProvider>
    </ThemeProvider>
  )
}
export default Providers;