import Image from "next/image";
import Link from "next/link";
import { BankCard } from "./BankCard";

export function RightSideBar({ user, transactions, banks }: RightSidebarProps) {
    return (
        <aside className="right-sidebar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl text-blue-500 fonot-bold">{user.firstname[0]}</span>
                    </div>

                    <div className="profile-details">
                        <h1 className="text-26 font-bold">
                            {user.firstname} {user.lastName}
                        </h1>
                        <p className="profile-email">
                            {user.email}
                        </p>
                    </div>
                </div>
            </section>

            <section className="banks mr-4">
                <div className="flex w-full justify-between">
                    <h2 className="header-2">My Banks</h2>
                    <Link href="/my-banks" className="flex gap-2">
                        <Image
                            src="/icons/plus.svg"
                            alt="plus icon"
                            width={20}
                            height={20}
                            className="text-gray-500"
                        />
                        <span className="underline text-gray-500">Add Bank</span>
                    </Link>
                </div>
                {banks?.length > 0 && (
                    <div className="relative flex flex-1 justify-center items-center gap-5">
                        <div className="relative z-10">
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                username={`${user.firstname} ${user.lastName}`}
                                showBalance={false}
                            />
                        </div>
                        {banks[1] && (
                            <div className="absolute right-0 top-8 z-0 w-[90%]">
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    username={`${user.firstname} ${user.lastName}`}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    )
}