// Core data model for W Boys.
// Designed so we can swap in a real backend later without changing screens.

export type Stage = 'grey' | 'finishing';

export type MaterialCategory = {
  id: string;
  stage: Stage;
  name: string;          // "Cement", "Steel Rebar", etc.
  vendorType: string;    // "Cement Supplier" — matches Excel column
  icon: string;          // Ionicons name
  sortOrder: number;
};

export type MaterialVariant = {
  id: string;
  categoryId: string;
  spec: string;          // e.g. "53-Grade OPC", "12mm Grade 60"
  unit: string;          // e.g. "50kg bag", "kg", "tractor load"
  marketAvg: number;     // computed-ish — for now a hardcoded reference
};

export type VendorMaterial = {
  variantId: string;
  price: number;         // what this vendor charges
};

export type Vendor = {
  id: string;
  name: string;
  area: string;          // e.g. "I-9 Industrial, Islamabad"
  city: 'Islamabad' | 'Rawalpindi';
  distanceKm: number;    // dummy distance from user
  verified: boolean;
  rating: number;        // 0–5
  reviewCount: number;
  phone: string;         // E.164 format for tel: + wa.me
  whatsapp: string;
  bannerColor: string;   // placeholder until real photos exist
  bio: string;           // one-liner
  vendorTypes: string[]; // e.g. ['Cement Supplier', 'Steel Supplier']
  stages: Stage[];       // which stages they serve
  materials: VendorMaterial[];
};
