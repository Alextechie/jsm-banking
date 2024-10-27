import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Alex', lastName: "Nganga" }
    return (

        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn.firstName} />
            {children}
        </main>
    )
}