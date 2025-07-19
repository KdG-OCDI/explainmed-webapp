'use client';

import { Settings } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { isDemoMode, setDemoMode } from '@/lib/demo-mode';

interface DemoModeToggleProps {
  className?: string;
}

export function DemoModeToggle({ className }: DemoModeToggleProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsEnabled(isDemoMode());
  }, []);

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    setDemoMode(newValue);
  };

  // Show demo mode toggle when pressing Ctrl+Shift+D
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`fixed bottom-4 right-4 z-50 ${className}`}
              onClick={() => setIsVisible(true)}
            >
              <Settings className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Demo mode instellingen (Ctrl+Shift+D)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 rounded-lg border bg-white p-4 shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Switch
            id="demo-mode"
            checked={isEnabled}
            onCheckedChange={handleToggle}
          />
          <Label htmlFor="demo-mode" className="text-sm font-medium">
            Demo mode
          </Label>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </Button>
      </div>
      {isEnabled && (
        <div className="mt-2 text-xs text-gray-600">
          <p>
            Demo teksten: Bob Dylan, Maria Jansen, Jan de Vries, Anna Bakker,
            Piet van der Berg
          </p>
        </div>
      )}
    </div>
  );
}
