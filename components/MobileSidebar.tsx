"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"





export function MobileSidebar({ user }: MobileSidebarProps) {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[254px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="icons/hamburger.svg" alt="hamburger" width={30} height={30} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/"
                        className="mb-2 cursor-pointer items-center gap-2 flex px-4 ">
                        <Image
                            src={"/icons/logo.svg"}
                            alt=""
                            width={34}
                            height={34}
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                    return (
                                        <SheetClose asChild key={link.route}>
                                            <Link
                                                key={link.label}
                                                href={link.route}
                                                className={cn("mobilenav-sheet_close w-full text-slate-800", {
                                                    'bg-bankGradient': isActive
                                                })}
                                            >
                                                <Image
                                                    src={link.imageUrl}
                                                    alt=""
                                                    width={20}
                                                    height={20}
                                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                                />

                                                <p className={cn(
                                                    ' text-black-2 font-semibold text-16 ', {
                                                    'text-white': isActive
                                                }
                                                )}>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                
                                USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </div>

                </SheetContent>
            </Sheet>
        </section>
    )
}