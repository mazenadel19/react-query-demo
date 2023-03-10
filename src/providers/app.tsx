import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

  return (
    <React.Suspense fallback={<div className="flex items-center justify-center w-screen h-screen">loading...</div>}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.MODE === 'development' && <ReactQueryDevtools position='top-right' />}
        {children}
      </QueryClientProvider>
    </React.Suspense>
  );
};
