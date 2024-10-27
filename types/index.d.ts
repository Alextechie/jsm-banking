interface HeaderBoxProps {
    type?: "title" | "greeting",
    title: string,
    subtext: string,
    user?: string
}

interface TotalBalanceProps {
    accounts: [],
    totalBanks: number,
    totalCurrentBalance: number
}


interface DoughnutChartProps {
    accounts: []
}