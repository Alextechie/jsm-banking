import { MobileSidebar } from "@/components/MobileSidebar";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Alex', lastName: "Nganga" }
    return (

        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn.firstName} />
            <div className="flex flex-col size-full">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
                    <div>
                        <MobileSidebar user={loggedIn.firstName} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    )
}