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

interface userSideProps {
    user: string
}

interface MobileSidebarProps {
    user: string
}

interface RightSidebarProps {
    user: string,
    transactions: [],
    banks: string[],
}


interface BankCardDetailsProps {
    $id: number,
    account: number[],
    username: string,
    showBalance: Boolean
}

interface CustomInputProps {
    form: string | typeof Control
    label: string,
    type: string,
    placeholder: string,
    input: string
}