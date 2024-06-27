'use client';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Badge,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import { color, cn, background, pressable, text } from '@coinbase/onchainkit/theme';
 
function WalletComponent() {
  return (
    <div className="flex justify-end">
      <Wallet>
        <ConnectWallet>
          <Avatar />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className={cn("px-4 pt-3 pb-2")} hasCopyAddressOnClick>
            <Avatar />
            <Name>
              <Badge />
            </Name>
            <Address className={color.foregroundMuted} />
            <EthBalance />
          </Identity>
          <WalletDropdownLink icon="wallet" href="https://wallet.coinbase.com">
            Go to Wallet Dashboard
          </WalletDropdownLink>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}

export default WalletComponent;