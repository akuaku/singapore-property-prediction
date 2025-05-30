"use client";

import React from 'react';
import ComparableProperties from './ComparableProperties';
const testProperties = [
  {
    sale_price: 1099760,
    floor_area_sqm: 40,
    price_per_sqm: 27494,
    price_per_sqft: 2554,
    price_difference: -49,
    calculation_details: {
      original_price: '1099760',
      area_sqm: 40,
      area_sqft: 430.56,
      price_per_sqft_calc: "1099760 / 430.56 = 2554"
    },
    location: "Sample Property 1",
    transaction_date: "2025-01-15",
    storey_range: "10-15",
    remaining_lease: 95,
    property_type: "Condominium",
    zone: "10"
  }
];

export default function ComparablePropertiesTest() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Testing Comparable Properties Display</h2>
      <ComparableProperties 
        properties={testProperties}
        targetPrice={2000000}
        targetArea={45}
      />
    </div>
  );
}