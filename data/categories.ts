import { MaterialCategory } from './types';

// Categories drawn from WBoys_Materials_List.xlsx.
// Each category maps to a "Vendor Category" the user would intuitively
// search for (e.g. "Cement Supplier").

export const categories: MaterialCategory[] = [
  // ───────── Grey Structure ─────────
  {
    id: 'cement',
    stage: 'grey',
    name: 'Cement',
    vendorType: 'Cement Supplier',
    icon: 'cube-outline',
    sortOrder: 1,
  },
  {
    id: 'steel',
    stage: 'grey',
    name: 'Steel Rebar',
    vendorType: 'Steel Supplier',
    icon: 'git-network-outline',
    sortOrder: 2,
  },
  {
    id: 'bricks',
    stage: 'grey',
    name: 'Bricks',
    vendorType: 'Brick Supplier',
    icon: 'apps-outline',
    sortOrder: 3,
  },
  {
    id: 'sand-aggregate',
    stage: 'grey',
    name: 'Sand & Aggregate',
    vendorType: 'Sand & Crush Supplier',
    icon: 'layers-outline',
    sortOrder: 4,
  },
  {
    id: 'waterproofing',
    stage: 'grey',
    name: 'Waterproofing',
    vendorType: 'Waterproofing Supplier',
    icon: 'water-outline',
    sortOrder: 5,
  },
  {
    id: 'plumbing-rough',
    stage: 'grey',
    name: 'Plumbing (Rough-in)',
    vendorType: 'Plumbing Supplier',
    icon: 'build-outline',
    sortOrder: 6,
  },
  {
    id: 'electrical-rough',
    stage: 'grey',
    name: 'Electrical (Rough-in)',
    vendorType: 'Electrical Supplier',
    icon: 'flash-outline',
    sortOrder: 7,
  },

  // ───────── Base Finishing ─────────
  {
    id: 'plaster',
    stage: 'finishing',
    name: 'Plaster & Finishing',
    vendorType: 'Plaster Supplier',
    icon: 'brush-outline',
    sortOrder: 1,
  },
  {
    id: 'tiles-marble',
    stage: 'finishing',
    name: 'Tiles & Marble',
    vendorType: 'Tile & Marble Dealer',
    icon: 'grid-outline',
    sortOrder: 2,
  },
  {
    id: 'ceiling',
    stage: 'finishing',
    name: 'Ceiling',
    vendorType: 'Ceiling Supplier',
    icon: 'square-outline',
    sortOrder: 3,
  },
  {
    id: 'doors-windows',
    stage: 'finishing',
    name: 'Doors & Windows',
    vendorType: 'Doors & Windows Supplier',
    icon: 'enter-outline',
    sortOrder: 4,
  },
  {
    id: 'sanitary',
    stage: 'finishing',
    name: 'Sanitary',
    vendorType: 'Sanitary Dealer',
    icon: 'water-outline',
    sortOrder: 5,
  },
  {
    id: 'electrical-finishing',
    stage: 'finishing',
    name: 'Electrical Finishing',
    vendorType: 'Electrical Supplier',
    icon: 'bulb-outline',
    sortOrder: 6,
  },
  {
    id: 'paint',
    stage: 'finishing',
    name: 'Paint',
    vendorType: 'Paint Dealer',
    icon: 'color-palette-outline',
    sortOrder: 7,
  },
];

export const getCategoriesByStage = (stage: 'grey' | 'finishing') =>
  categories.filter((c) => c.stage === stage).sort((a, b) => a.sortOrder - b.sortOrder);

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);
