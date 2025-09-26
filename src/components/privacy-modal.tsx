'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePrivacy } from '@/lib/privacy-context';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
    const { acceptCookies } = usePrivacy();

    if (!isOpen) return null;

    const handleAccept = () => {
        acceptCookies();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-lg font-semibold">Privacy instellingen</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <div className="p-4">
                    <p className="mb-4 text-gray-700">
                        ExplainMed gaat zorgvuldig om met jouw gegevens. ExplainMed maakt jouw medische verslagen duidelijk door de moeilijke medische termen te verklaren. Je krijgt een samenvatting van je verslag. ExplainMed bewaart je gegevens niet, na het lezen wordt je verslag verwijderd.
                    </p>
                </div>

                <div className="border-t p-4">
                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={handleAccept}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Beginnen met ExplainMed
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.open('/privacy', '_blank')}
                            className="w-full text-gray-600 hover:text-gray-800"
                        >
                            Meer informatie
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
