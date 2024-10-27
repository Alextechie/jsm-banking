import { HeaderBox } from "@/components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";

export default function Home() {

  const loggedIn = {firsname: "Alex"}
  return (
<section className="home">
  <div className="home-content">
    <header className="home-header">
      <HeaderBox 
        type="greeting"
        title = "Welcome"
        subtext="Access and manage your account and transactions efficiently"
        user={loggedIn?.firsname}
      />
      <TotalBalanceBox 
        totalBanks={1}
        accounts = {[]}
        totalCurrentBalance = {1250}
      />
    </header>
  </div>
</section>
  );
}
