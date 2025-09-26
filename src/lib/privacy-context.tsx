'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PrivacyContextType {
    hasAcceptedCookies: boolean | null; // null = not decided yet, true = accepted, false = declined
    acceptCookies: () => void;
    declineCookies: () => void;
}

const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined);

export function PrivacyProvider({ children }: { children: ReactNode }) {
    const [hasAcceptedCookies, setHasAcceptedCookies] = useState<boolean | null>(null);

    useEffect(() => {
        // Check localStorage for existing consent
        const consent = localStorage.getItem('privacy-banner-accepted');
        if (consent === 'true') {
            setHasAcceptedCookies(true);
        } else if (consent === 'false') {
            setHasAcceptedCookies(false);
        }
        // If no consent found, keep as null (not decided yet)
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('privacy-banner-accepted', 'true');
        setHasAcceptedCookies(true);
    };

    const declineCookies = () => {
        localStorage.setItem('privacy-banner-accepted', 'false');
        setHasAcceptedCookies(false);
    };

    return (
        <PrivacyContext.Provider
            value={{
                hasAcceptedCookies,
                acceptCookies,
                declineCookies,
            }}
        >
            {children}
        </PrivacyContext.Provider>
    );
}

export function usePrivacy() {
    const context = useContext(PrivacyContext);
    if (context === undefined) {
        throw new Error('usePrivacy must be used within a PrivacyProvider');
    }
    return context;
}
