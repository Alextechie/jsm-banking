import { formatAmount } from "@/lib/utils";
import { AnimatedCounter } from "./AnimatedCounter";
import { DoughnutChart } from "./DoughnutChart";

export function TotalBalanceBox({accounts, totalBanks, totalCurrentBalance}: TotalBalanceProps){
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                {/**Doughnut chart */}
                <DoughnutChart accounts={accounts}/>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="header-2">
                    Bank Accounts: {accounts}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Current Balance
                    </p>
                    <div className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount={totalCurrentBalance}/>
                    </div>
                </div>
            </div>
        </section>
    )
}