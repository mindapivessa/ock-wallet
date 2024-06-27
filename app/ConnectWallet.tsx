'use client';
import { Avatar, Identity, Name, Badge, Address } from '@coinbase/onchainkit/identity';
import { ConnectAccount } from '@coinbase/onchainkit/wallet'; 
import { useAccount, useDisconnect } from 'wagmi';
 
function ConnectWallet() {
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();
 
  return (
    <div className="flex flex-grow">
      {(() => {
        if (status === 'disconnected') {
          return <ConnectAccount />; 
        }
 
        return (
          <div className="flex h-8 w-8 items-center justify-center">
            {address && (
              <button type="button" onClick={() => disconnect()}>
                <Identity
                    address={address}
                    schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
                >
                    <Avatar />
                    <Badge />
                <Address />
                </Identity>
              </button>
            )}
          </div>
        );
      })()}
    </div>
  );
}

export default ConnectWallet;