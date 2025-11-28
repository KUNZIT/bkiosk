"use client";

import { useState } from 'react';
import { CreditCard, Zap, RefreshCw, Activity, Lock } from 'lucide-react';
// FIX 1: Import QueryClientProvider from TanStack Query
import { QueryClientProvider } from '@tanstack/react-query';
// Wagmi V2 provider name
import { WagmiProvider } from 'wagmi'; 
import dynamic from 'next/dynamic'; // Import dynamic for SSR fix

// FIX 2: Import the required 'queryClient' alongside 'config'
import { config, projectId, metadata, queryClient } from './wagmi'; 
import { useWeb3Modal } from '@web3modal/wagmi/react';

// Dynamically import PaymentApp and disable Server-Side Rendering (SSR).
const PaymentAppDynamic = dynamic(() => import('./PaymentApp'), {
    ssr: false,
    loading: () => (
        <div className="flex justify-center items-center h-48">
            <RefreshCw className="w-8 h-8 animate-spin text-indigo-600" />
            <p className="ml-3">Loading Wallet Interface...</p>
        </div>
    ),
});

export default function Page() {
    return (
        // FIX 3: Wrap the entire application with QueryClientProvider
        <QueryClientProvider client={queryClient}>
            {/* Wagmi Provider uses the config */}
            <WagmiProvider config={config}>
                {/* Render the dynamically imported component */}
                <PaymentAppDynamic />
            </WagmiProvider>
        </QueryClientProvider>
    );
}