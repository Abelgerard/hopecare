import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { generateLogo } from '../services/logoService';

export default function Logo({ 
  className = "h-10 w-auto",
  showBackground = true,
  stacked = false,
  stackedOnMobileOnly = false
}: { 
  className?: string;
  showBackground?: boolean;
  stacked?: boolean;
  stackedOnMobileOnly?: boolean;
}) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const url = await generateLogo();
        setLogoUrl(url);
      } catch (error: any) {
        // If it's a quota error, we don't need to log it as a critical error
        if (error?.status === 429 || error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
          console.warn("Logo generation quota exceeded, using fallback logo.");
        } else {
          console.error("Failed to generate logo:", error);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  if (loading) {
    return <div className={`${className} bg-primary/10 animate-pulse rounded-md`}></div>;
  }

  const FallbackLogo = () => (
    <div className="flex items-center gap-2 group">
      <div className={`${showBackground ? 'p-2 shadow-sm rounded-xl group-hover:bg-primary/5' : ''} transition-colors`}>
        <Heart className="w-6 h-6 text-primary" fill="currentColor" />
      </div>
      <span className={`text-lg font-extrabold tracking-tight text-primary font-headline ${stacked ? 'leading-none' : ''}`}>
        Hope Care {stacked && <br className={stackedOnMobileOnly ? 'md:hidden' : ''} />} <span className="text-secondary">Foundation</span>
      </span>
    </div>
  );

  if (error || !logoUrl) {
    return <FallbackLogo />;
  }

  return (
    <div className="flex items-center gap-2 group">
      <div className={`${showBackground ? 'p-2 shadow-md border border-outline-variant/20 rounded-xl group-hover:shadow-lg' : ''} transition-all duration-300`}>
        <img 
          src={logoUrl} 
          alt="Hope Care Foundation Logo" 
          className={className}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      </div>
      <span className={`text-lg font-extrabold tracking-tight text-primary font-headline ${stacked ? 'leading-none' : ''}`}>
        Hope Care {stacked && <br className={stackedOnMobileOnly ? 'md:hidden' : ''} />} <span className="text-secondary">Foundation</span>
      </span>
    </div>
  );
}
