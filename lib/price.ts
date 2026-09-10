// Helpers for the price-transparency UI.
// Decides whether a price is below, at, or above the market average.

export type PriceVerdict = 'below' | 'even' | 'above';

export const verdictFor = (price: number, marketAvg: number): PriceVerdict => {
  const delta = (price - marketAvg) / marketAvg;
  if (delta < -0.015) return 'below'; // >1.5% below avg = good deal
  if (delta > 0.015) return 'above';
  return 'even';
};

export const formatPKR = (n: number) => {
  // No decimals; thousand separators
  return `PKR ${n.toLocaleString('en-PK')}`;
};

export const formatPKRShort = (n: number) => {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
  return `${n}`;
};
