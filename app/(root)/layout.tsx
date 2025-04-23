import { ReactNode } from 'react'
import Link from "next/link";
import Image from "next/image";
import {isAuthenticated} from "@/lib/actions/auth.actions";
import {redirect} from "next/navigation";

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated) redirect('/sign-in');

    return (
        <div className="root-layout">
            <nav>
                <Link href="/"  className="flex items-center gap-2" >
                    <Image src="/job-interview.png" alt="Logo" width={58} height={48} />
                    <h2 className="text-primary-100">MockMate</h2>
                </Link>
            </nav>

            {children}
        </div>
    )
}
export default RootLayout