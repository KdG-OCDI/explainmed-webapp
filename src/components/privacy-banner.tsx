'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePrivacy } from '@/lib/privacy-context';

export function PrivacyBanner() {
    const { hasAcceptedCookies, acceptCookies, declineCookies } = usePrivacy();

    // Only show banner if user hasn't made a decision yet
    if (hasAcceptedCookies !== null) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                        <p className="text-base text-gray-700 mb-2">
                            Wij gebruiken cookies om uw ervaring te verbeteren en onze service te analyseren.
                            Door verder te gaan, gaat u akkoord met ons gebruik van cookies.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/privacy"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                Privacybeleid
                            </Link>
                            <span className="text-gray-400">•</span>
                            <Link
                                href="/terms"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                Algemene Voorwaarden
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            onClick={declineCookies}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Weigeren
                        </Button>
                        <Button
                            onClick={acceptCookies}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Accepteren
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
