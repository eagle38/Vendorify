// Typography scale for W Boys.
// Display font: Playfair Display — editorial, signals trust + heritage.
// Body font: Inter — clean, neutral, excellent at small sizes.

export const type = {
  display: {
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  body: {
    fontFamily: 'Inter_400Regular',
  },
  bodyMd: {
    fontFamily: 'Inter_500Medium',
  },
  bodySb: {
    fontFamily: 'Inter_600SemiBold',
  },
  size: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    '2xl': 30,
    '3xl': 38,
  },
} as const;
