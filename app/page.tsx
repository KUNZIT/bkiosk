"use client";

import { useState } from 'react';
import { CreditCard, Zap, RefreshCw, Activity, Lock } from 'lucide-react';

import { QueryClientProvider } from '@tanstack/react-query';

import { WagmiProvider } from 'wagmi'; 
import dynamic from 'next/dynamic'; 


import { config, projectId, metadata, queryClient } from './wagmi'; 
import { useWeb3Modal } from '@web3modal/wagmi/react';


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
        
        <QueryClientProvider client={queryClient}>
            {/* Wagmi Provider uses the config */}
            <WagmiProvider config={config}>
                {/* Render the dynamically imported component */}
                <PaymentAppDynamic />
            </WagmiProvider>
        </QueryClientProvider>
    );
}
