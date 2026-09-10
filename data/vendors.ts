import { Vendor } from './types';

// Twelve dummy vendors covering Rawalpindi + Islamabad.
// Overlap is intentional: cement is sold by 5 vendors so the price-
// comparison UI has something meaningful to show.

export const vendors: Vendor[] = [
  // ─────── GREY STRUCTURE VENDORS ───────
  {
    id: 'v01',
    name: 'Raja Cement House',
    area: 'Raja Bazaar, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 2.3,
    verified: true,
    rating: 4.6,
    reviewCount: 142,
    phone: '+923005551234',
    whatsapp: '+923005551234',
    bannerColor: '#3D5673',
    bio: 'Family-run cement and aggregate supplier serving Pindi since 1987.',
    vendorTypes: ['Cement Supplier', 'Sand & Crush Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'cement-opc-53', price: 1360 },
      { variantId: 'cement-opc-43', price: 1320 },
      { variantId: 'sand-coarse',   price: 8200 },
      { variantId: 'sand-fine',     price: 6500 },
      { variantId: 'crush-margalla', price: 14000 },
    ],
  },
  {
    id: 'v02',
    name: 'Lucky Traders',
    area: 'College Road, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 4.8,
    verified: true,
    rating: 4.1,
    reviewCount: 67,
    phone: '+923215559876',
    whatsapp: '+923215559876',
    bannerColor: '#0F2A44',
    bio: 'Cement and white cement — bulk orders welcome.',
    vendorTypes: ['Cement Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'cement-opc-53', price: 1420 },
      { variantId: 'cement-opc-43', price: 1380 },
      { variantId: 'cement-white',  price: 3150 },
    ],
  },
  {
    id: 'v03',
    name: 'Al-Rehman Steel',
    area: 'I-9 Industrial, Islamabad',
    city: 'Islamabad',
    distanceKm: 6.1,
    verified: true,
    rating: 4.7,
    reviewCount: 203,
    phone: '+923335552468',
    whatsapp: '+923335552468',
    bannerColor: '#3D5673',
    bio: 'Authorized dealer for Mughal Steel and Ittefaq Steel. Grade 60 specialists.',
    vendorTypes: ['Steel Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'steel-10mm', price: 236 },
      { variantId: 'steel-12mm', price: 240 },
      { variantId: 'steel-16mm', price: 246 },
      { variantId: 'steel-20mm', price: 253 },
    ],
  },
  {
    id: 'v04',
    name: 'Khan Building Materials',
    area: 'Murree Road, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 3.5,
    verified: false,
    rating: 3.9,
    reviewCount: 28,
    phone: '+923215553456',
    whatsapp: '+923215553456',
    bannerColor: '#8B96A5',
    bio: 'One-stop shop for cement, steel and bricks. Open 7am–9pm.',
    vendorTypes: ['Cement Supplier', 'Steel Supplier', 'Brick Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'cement-opc-53', price: 1395 },
      { variantId: 'cement-opc-43', price: 1355 },
      { variantId: 'steel-10mm',    price: 244 },
      { variantId: 'steel-12mm',    price: 248 },
      { variantId: 'brick-awwal',   price: 22500 },
      { variantId: 'brick-doem',    price: 17800 },
    ],
  },
  {
    id: 'v05',
    name: 'Cement Direct',
    area: 'G-9 Markaz, Islamabad',
    city: 'Islamabad',
    distanceKm: 7.2,
    verified: true,
    rating: 4.3,
    reviewCount: 89,
    phone: '+923005557890',
    whatsapp: '+923005557890',
    bannerColor: '#0F2A44',
    bio: 'Direct from-mill cement at trade prices. Min order 100 bags.',
    vendorTypes: ['Cement Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'cement-opc-53', price: 1340 },
      { variantId: 'cement-opc-43', price: 1305 },
    ],
  },
  {
    id: 'v06',
    name: 'Pindi Brick Works',
    area: 'Adiala Road, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 9.4,
    verified: true,
    rating: 4.4,
    reviewCount: 51,
    phone: '+923335556677',
    whatsapp: '+923335556677',
    bannerColor: '#C44536',
    bio: 'Locally fired bricks — Awwal and Doem grades. Delivery available.',
    vendorTypes: ['Brick Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'brick-awwal',   price: 21500 },
      { variantId: 'brick-doem',    price: 17000 },
      { variantId: 'brick-fly-ash', price: 88 },
    ],
  },
  {
    id: 'v07',
    name: 'Hassan Plumbing & Electrical',
    area: 'F-10 Markaz, Islamabad',
    city: 'Islamabad',
    distanceKm: 8.0,
    verified: true,
    rating: 4.2,
    reviewCount: 73,
    phone: '+923215552233',
    whatsapp: '+923215552233',
    bannerColor: '#2D8659',
    bio: 'PPR, uPVC, copper cable and conduit. Wholesale rates for contractors.',
    vendorTypes: ['Plumbing Supplier', 'Electrical Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'plumb-ppr-25',  price: 820 },
      { variantId: 'plumb-upvc-4',  price: 2350 },
      { variantId: 'wire-7-29',     price: 11200 },
      { variantId: 'conduit-pvc',   price: 138 },
    ],
  },
  {
    id: 'v08',
    name: 'Margalla Crush Co.',
    area: 'Taxila Road, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 12.5,
    verified: false,
    rating: 4.0,
    reviewCount: 19,
    phone: '+923005558899',
    whatsapp: '+923005558899',
    bannerColor: '#8B96A5',
    bio: 'Crush and aggregate from Margalla quarries. Tractor or truckload.',
    vendorTypes: ['Sand & Crush Supplier'],
    stages: ['grey'],
    materials: [
      { variantId: 'sand-coarse',    price: 8800 },
      { variantId: 'crush-margalla', price: 14200 },
    ],
  },

  // ─────── FINISHING VENDORS ───────
  {
    id: 'v09',
    name: 'Marble Palace',
    area: 'I-10 Markaz, Islamabad',
    city: 'Islamabad',
    distanceKm: 5.5,
    verified: true,
    rating: 4.8,
    reviewCount: 167,
    phone: '+923335554455',
    whatsapp: '+923335554455',
    bannerColor: '#E8A33D',
    bio: 'Imported and local marble + ceramic tiles. Showroom open daily.',
    vendorTypes: ['Tile & Marble Dealer'],
    stages: ['finishing'],
    materials: [
      { variantId: 'tile-floor-2x2',  price: 175 },
      { variantId: 'tile-wall-12x18', price: 140 },
      { variantId: 'marble-badal',    price: 265 },
    ],
  },
  {
    id: 'v10',
    name: 'Royal Sanitary House',
    area: 'Saddar, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 3.1,
    verified: true,
    rating: 4.5,
    reviewCount: 94,
    phone: '+923005551122',
    whatsapp: '+923005551122',
    bannerColor: '#0F2A44',
    bio: 'Master, Sonex and Porta authorized dealer. Full bathroom packages.',
    vendorTypes: ['Sanitary Dealer'],
    stages: ['finishing'],
    materials: [
      { variantId: 'wc-master',    price: 14200 },
      { variantId: 'basin-porta',  price: 6300 },
    ],
  },
  {
    id: 'v11',
    name: 'Master Paint Centre',
    area: 'Blue Area, Islamabad',
    city: 'Islamabad',
    distanceKm: 7.8,
    verified: true,
    rating: 4.6,
    reviewCount: 121,
    phone: '+923335558844',
    whatsapp: '+923335558844',
    bannerColor: '#E8A33D',
    bio: 'Master Paints flagship showroom. Color matching and bulk discounts.',
    vendorTypes: ['Paint Dealer'],
    stages: ['finishing'],
    materials: [
      { variantId: 'paint-matt',    price: 4150 },
      { variantId: 'paint-weather', price: 5700 },
    ],
  },
  {
    id: 'v12',
    name: 'Falcon Doors & Windows',
    area: 'Peshawar Road, Rawalpindi',
    city: 'Rawalpindi',
    distanceKm: 4.4,
    verified: false,
    rating: 4.0,
    reviewCount: 34,
    phone: '+923215557766',
    whatsapp: '+923215557766',
    bannerColor: '#3D5673',
    bio: 'Aluminum, uPVC and wooden flush doors. Custom sizes on order.',
    vendorTypes: ['Doors & Windows Supplier'],
    stages: ['finishing'],
    materials: [
      { variantId: 'door-flush',  price: 9200 },
      { variantId: 'window-alum', price: 18200 },
    ],
  },
];

// ───────── helpers ─────────

export const getVendorById = (id: string) => vendors.find((v) => v.id === id);

export const getVendorsByStage = (stage: 'grey' | 'finishing') =>
  vendors.filter((v) => v.stages.includes(stage));

export const getVendorsByCategory = (
  stage: 'grey' | 'finishing',
  vendorType: string,
) =>
  vendors.filter(
    (v) => v.stages.includes(stage) && v.vendorTypes.includes(vendorType),
  );

export const getVendorsByVariant = (variantId: string) =>
  vendors
    .filter((v) => v.materials.some((m) => m.variantId === variantId))
    .map((v) => ({
      vendor: v,
      price: v.materials.find((m) => m.variantId === variantId)!.price,
    }));

export const getFeaturedVendors = (stage: 'grey' | 'finishing') =>
  getVendorsByStage(stage)
    .filter((v) => v.verified)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

// Cheapest price across all vendors for a variant — used for "from PKR X" hints.
export const getMinPriceForVariant = (variantId: string): number | null => {
  const prices = getVendorsByVariant(variantId).map((v) => v.price);
  return prices.length ? Math.min(...prices) : null;
};
