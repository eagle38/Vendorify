## Vendorify

Vendorify is a construction vendor discovery app for Rawalpindi and Islamabad, built to bring price transparency to an industry that usually runs on word-of-mouth and haggling. Think FoodPanda, but for finding and comparing construction material vendors.

## Features
Browse vendors by category (cement, tiles, electrical, plumbing, hardware, etc.)
Price transparency — see listed pricing up front, no need to call around
Search & filter to quickly narrow down vendors by location or category
Vendor detail pages with photos, contact info, and service areas
Location-aware discovery tailored to Rawalpindi/Islamabad

Adjust the feature list above to match what's actually shipped — this is a starting point.

## Screenshots


## Tech Stack
Framework: React Native (Expo)
Language: TypeScript
Routing: Expo Router
State management: Zustand
Backend: Supabase

## Setup

```bash
# 1. Install deps
npm install

# 2. Start the Expo dev server
npx expo start
```

Then on your phone:
1. Install **Expo Go** from the Play Store / App Store
2. Scan the QR code printed in your terminal
3. The app will load on your phone

## Project structure

```
wboys-app/
├── app/                    # Expo Router screens
│   ├── _layout.tsx         # Root layout + font loading
│   ├── (tabs)/             # Bottom tab group
│   │   ├── _layout.tsx
│   │   ├── index.tsx       # Home
│   │   ├── search.tsx
│   │   ├── saved.tsx
│   │   └── profile.tsx
│   ├── material/[id].tsx   # Material listing — price comparison
│   └── vendor/[id].tsx     # Vendor profile
├── components/
│   ├── home/               # StageToggle, SearchBar, 
│   │                       # VendorCard, VendorCarousel
│   ├── vendor/             # VendorHeader, ContactBar, 
│   └── ui/                 # Badge, Chip, SectionHeader
├── data/                   # Dummy data — vendors, materials, categories, types , materials , vendors
├── lib/                    # contact (WhatsApp/tel), price helpers, Zustand store
└── theme/                  # colors, typography, spacing
```

## Design system

- **Background:** warm off-white `#FAF8F5` (not pure white — feels less clinical)
- **Primary ink:** deep navy `#0F2A44` (trust and credibility)
- **Accent:** saffron `#E8A33D` (verified badges, star ratings)
- **Below market price:** green `#2D8659`
- **Above market price:** red `#C44536`
- **Display font:** Playfair Display Bold — editorial serif for headings
- **Body font:** Inter — clean sans-serif for everything else

## Mock data conventions

- All phones are real-looking Pakistani format (`+923XXXXXXXXX`) but they're dummy
- Banner photos are solid colors as placeholders — swap in `expo-image` `<Image source>` when you have real photography
- `marketAvg` on each variant is hardcoded; in production it would be computed from a live vendor price feed

## Next steps i have to do

1. **Real photos** — replace `bannerColor` with `bannerUri` in `Vendor` type and render with `expo-image`
2. **Backend** — Supabase or Firebase, swap dummy data for fetched data via React Query
3. **Map view toggle** on material listing — pin per vendor with price on the pin
4. **Auth** — sign-in to persist saved vendors across devices
5. **Vendor onboarding flow** — separate signup for vendors to list themselves
6. **Real prices** — survey or scrape vendor prices weekly and update `marketAvg`


