'use client';

import React from 'react';

type DebugValuationDataProps = {
  propInfo: any;
  title?: string;
};

export default function DebugValuationData({ propInfo, designation = 'API Response' }: DebugValuationDataProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-hidden">
      <h3 className="font-bold text-lg mb-2">{designation}</h3>
      <pre className="text-xs overflow-auto bg-white p-2 rounded">
        {JSON.stringify(propInfo, null, 2)}
      </pre>
      
      {}
      <div className="mt-4 space-y-1 text-sm">
        <p>
          <strong>Calculation Method:</strong> {data?.calculation_method || 'Not found'}
        </p>
        <p>
          <strong>Has Components:</strong> {data?.components ? "Yes" : 'No'}
        </p>
        {data?.components && (
          <>
            <p>
              <strong>ML Prediction exists:</strong> {data.components.ml_prediction ? "Yes" : 'No'}
            </p>
            <p>
              <strong>Transaction Based exists:</strong> {propInfo['components'].transaction_based ? 'Yes' : 'No'}
            </p>
          </>
        )}
        <p>
          <strong>Weights Used:</strong> {data?.weights_used ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}