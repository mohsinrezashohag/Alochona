
import StreamVideoProvider from '@/provider/StreamProvider';
import React, { ReactNode } from 'react';

const RootLayout = ({children} : {children : ReactNode}) => {
    return (
        <main>
            <StreamVideoProvider>
            {children}
            </StreamVideoProvider>
         
        </main>
    );
};

export default RootLayout;