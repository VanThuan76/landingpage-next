import "../globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from 'sonner';

import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";

import Providers from "../providers";


const inter = Oswald({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
    title: "Shadcn - Landing template",
    description: "Landing template from Shadcn",
};

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    unstable_setRequestLocale(locale);

    const translate = await getMessages();

    return (
        <NextIntlClientProvider messages={translate}>
            <html lang={locale} suppressHydrationWarning>
                <body className={cn("min-h-screen bg-background", inter.className)}>
                    <Providers>
                        <Dialog open={true}>
                            <DialogContent className="h-screen max-w-md p-0 m-0 overflow-hidden border-none">
                                {children}
                            </DialogContent>
                            <Toaster position="top-right" toastOptions={{ className: 'bg-green-400 border border-green-600' }} />
                        </Dialog>
                    </Providers>
                </body>
            </html>
        </NextIntlClientProvider>
    );
}
