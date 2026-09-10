// W Boys color palette
// Warm off-white background, deep navy primary, saffron accent.
// Designed to feel trustworthy and editorial rather than youthful.

export const colors = {
  bg: '#FAF8F5',
  surface: '#FFFFFF',

  ink: '#0F2A44',
  inkSoft: '#3D5673',
  inkFaint: '#8B96A5',

  accent: '#E8A33D',
  accentDim: '#F4D199',

  below: '#2D8659',  // price below market average
  above: '#C44536',  // price above market average
  even: '#8B96A5',   // price at market

  line: '#E8E2D8',
  chip: '#F1ECE2',
  chipActive: '#0F2A44',

  // Stage tints
  greyStructureTint: '#E8EEF4',
  finishingTint: '#F4EAE0',
} as const;

export type Color = keyof typeof colors;
