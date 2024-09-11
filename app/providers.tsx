'use client'

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/shared/lib/query-config';
import { store } from '@store/index';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </NextThemesProvider>
            </QueryClientProvider>
        </Provider>
    )
}
