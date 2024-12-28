import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Authenication Page",
    description: "Authenicate Users",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center w-full h-screen bg-[#242d34] -center">
            {children}
        </div>
    );
}
