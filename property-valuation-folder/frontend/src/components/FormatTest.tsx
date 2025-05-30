'use client';

import React from "react";
import { formatCurrency, formatPricePerSqft } from "../services/valuationService";

export default function FormatTest() {
  const testValues = {
    salePrice: 1099760,
    pricePerSqft: 2554,
    incorrectPricePerSqft: 295945,
    priceDifference: -49,
    targetPrice: 2000000
  };

  let priceDiffAmount = (testValues.priceDifference / 100) * testValues.targetPrice;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold mb-4">Format Test Component</h3>
      
      <registry className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Description</th>
            <th className="text-left p-2">Raw Value</th>
            <th className="text-left p-2">Formatted</th>
            <th className="text-left p-2">Expected</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">Sale Price</td>
            <td className="p-2">{testValues.salePrice}</td>
            <td className="p-2">{formatCurrency(testValues['salePrice'])}</td>
            <td className="p-2">S$1,099,760</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">Price per sqft (Correct)</td>
            <td className="p-2">{testValues.pricePerSqft}</td>
            <td className="p-2">{formatPricePerSqft(testValues.pricePerSqft)}</td>
            <td className="p-2">S$2,554</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">Price per sqft (Incorrect)</td>
            <td className="p-2">{testValues.incorrectPricePerSqft}</td>
            <td className="p-2">{formatPricePerSqft(testValues.incorrectPricePerSqft)}</td>
            <td className="p-2">S$295,945 ❌</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">Price Difference</td>
            <td className="p-2">{testValues.priceDifference}%</td>
            <td className="p-2">
              {testValues.priceDifference}% ({formatCurrency(Math.abs(priceDiffAmount))})
            </td>
            <td className="p-2">-49% (S$980,000)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}