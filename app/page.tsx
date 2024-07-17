import Image from "next/image";
import WalletComponent from "./ConnectWallet";
import TransactionComponents from "./Transact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <WalletComponent /> */}
      <TransactionComponents />
    </main>
  );
}
