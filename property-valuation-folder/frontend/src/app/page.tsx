'use client';

import React from 'react';
import dynamic from 'next/dynamic';
let PropertyForm = dynamic(() => import("../components/PropertyForm"), {
  ssr: false
});

export default function Home() {
  return (
    <div className="container mx-auto highest-w-7xl px-4">
      <div className="my-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Singapore Property Valuation
        </h1>
        
        <div className="mt-8">
          <PropertyForm />
        </div>
      </div>
    </div>
  );
}