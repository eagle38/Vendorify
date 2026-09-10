import { MaterialVariant } from './types';

// Material variants (spec + unit + market avg). Prices are realistic-ish
// for Islamabad/Rawalpindi as of mid-2026 but are dummy data — replace
// with scraped/surveyed prices when the backend ships.

export const variants: MaterialVariant[] = [
  // ── Cement ──
  { id: 'cement-opc-53',  categoryId: 'cement', spec: 'OPC 53-Grade', unit: '50kg bag', marketAvg: 1385 },
  { id: 'cement-opc-43',  categoryId: 'cement', spec: 'OPC 43-Grade', unit: '50kg bag', marketAvg: 1340 },
  { id: 'cement-white',   categoryId: 'cement', spec: 'White Cement', unit: '50kg bag', marketAvg: 3200 },

  // ── Steel Rebar ──
  { id: 'steel-10mm',     categoryId: 'steel', spec: '10mm Grade 60', unit: 'kg', marketAvg: 236 },
  { id: 'steel-12mm',     categoryId: 'steel', spec: '12mm Grade 60', unit: 'kg', marketAvg: 241 },
  { id: 'steel-16mm',     categoryId: 'steel', spec: '16mm Grade 60', unit: 'kg', marketAvg: 248 },
  { id: 'steel-20mm',     categoryId: 'steel', spec: '20mm Grade 60', unit: 'kg', marketAvg: 255 },

  // ── Bricks ──
  { id: 'brick-awwal',    categoryId: 'bricks', spec: 'Awwal (first-class)', unit: '1000 pcs', marketAvg: 22000 },
  { id: 'brick-doem',     categoryId: 'bricks', spec: 'Doem (second-class)', unit: '1000 pcs', marketAvg: 17500 },
  { id: 'brick-fly-ash',  categoryId: 'bricks', spec: 'Fly-ash Block', unit: 'piece', marketAvg: 95 },

  // ── Sand & Aggregate ──
  { id: 'sand-coarse',    categoryId: 'sand-aggregate', spec: 'Coarse (Lawrencepur)', unit: 'tractor load', marketAvg: 8500 },
  { id: 'sand-fine',      categoryId: 'sand-aggregate', spec: 'Fine (Chenab)', unit: 'tractor load', marketAvg: 6800 },
  { id: 'crush-margalla',  categoryId: 'sand-aggregate', spec: 'Margalla Crush (3/4")', unit: 'tractor load', marketAvg: 14500 },

  // ── Waterproofing ──
  { id: 'wp-membrane',    categoryId: 'waterproofing', spec: 'Bituminous Membrane', unit: 'roll (10m²)', marketAvg: 9500 },
  { id: 'wp-coating',     categoryId: 'waterproofing', spec: 'Acrylic Coating', unit: '20L drum', marketAvg: 18000 },

  // ── Plumbing Rough-in ──
  { id: 'plumb-ppr-25',   categoryId: 'plumbing-rough', spec: 'PPR Pipe 25mm', unit: '4m length', marketAvg: 850 },
  { id: 'plumb-upvc-4',   categoryId: 'plumbing-rough', spec: 'uPVC Pipe 4"', unit: '6m length', marketAvg: 2400 },

  // ── Electrical Rough-in ──
  { id: 'wire-7-29',      categoryId: 'electrical-rough', spec: '7/29 Copper Cable', unit: '100m coil', marketAvg: 11500 },
  { id: 'conduit-pvc',    categoryId: 'electrical-rough', spec: 'PVC Conduit 1/2"', unit: '3m length', marketAvg: 145 },

  // ── Plaster ──
  { id: 'plaster-gypsum', categoryId: 'plaster', spec: 'Gypsum Plaster', unit: '40kg bag', marketAvg: 1450 },

  // ── Tiles & Marble ──
  { id: 'tile-floor-2x2', categoryId: 'tiles-marble', spec: 'Floor Tile 2×2', unit: 'sqft', marketAvg: 180 },
  { id: 'tile-wall-12x18',categoryId: 'tiles-marble', spec: 'Wall Tile 12×18', unit: 'sqft', marketAvg: 145 },
  { id: 'marble-badal',   categoryId: 'tiles-marble', spec: 'Badal Grey Marble', unit: 'sqft', marketAvg: 280 },

  // ── Ceiling ──
  { id: 'ceiling-pop',    categoryId: 'ceiling', spec: 'POP False Ceiling', unit: 'sqft', marketAvg: 165 },
  { id: 'ceiling-gypsum', categoryId: 'ceiling', spec: 'Gypsum Board Ceiling', unit: 'sqft', marketAvg: 195 },

  // ── Doors & Windows ──
  { id: 'door-flush',     categoryId: 'doors-windows', spec: 'Flush Door 7×3', unit: 'piece', marketAvg: 9500 },
  { id: 'window-alum',    categoryId: 'doors-windows', spec: 'Aluminum Sliding 5×4', unit: 'piece', marketAvg: 18500 },

  // ── Sanitary ──
  { id: 'wc-master',      categoryId: 'sanitary', spec: 'Master WC Set', unit: 'set', marketAvg: 14500 },
  { id: 'basin-porta',    categoryId: 'sanitary', spec: 'Porta Basin', unit: 'piece', marketAvg: 6500 },

  // ── Electrical Finishing ──
  { id: 'switch-clipsal', categoryId: 'electrical-finishing', spec: 'Clipsal 1-Gang Switch', unit: 'piece', marketAvg: 650 },
  { id: 'mcb-16a',        categoryId: 'electrical-finishing', spec: 'MCB 16A Single Pole', unit: 'piece', marketAvg: 480 },

  // ── Paint ──
  { id: 'paint-matt',     categoryId: 'paint', spec: 'Matt Emulsion (Master)', unit: '3.6L', marketAvg: 4200 },
  { id: 'paint-weather',  categoryId: 'paint', spec: 'Weathercoat (Master)', unit: '3.6L', marketAvg: 5800 },
];

export const getVariantsByCategory = (categoryId: string) =>
  variants.filter((v) => v.categoryId === categoryId);

export const getVariantById = (id: string) => variants.find((v) => v.id === id);
