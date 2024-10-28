import { HeaderBox } from "@/components/HeaderBox";
import { RightSideBar } from "@/components/RightSideBar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";

export default function Home() {

  const loggedIn = {firstname: "Alex", lastName: "Nganga", email: "ngangaalex795@gmail.com"}
  return (
<section className="home">
  <div className="home-content">
    <header className="home-header">
      <HeaderBox 
        type="greeting"
        title = "Welcome"
        subtext="Access and manage your account and transactions efficiently"
        user={loggedIn?.firstname}
      />
      <TotalBalanceBox 
        totalBanks={1}
        accounts = {[]}
        totalCurrentBalance = {1250}
      />
    </header>

    RECENT TRANSACTIONS
  </div>
  <RightSideBar 
    user={loggedIn}
    transactions={[]}
    banks={[{currentBalance: 12500.75}, {currentBalance: 5000.45}]}
  />
</section>
  );
}
