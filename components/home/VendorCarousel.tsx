import React from 'react';
import { FlatList } from 'react-native';
import { Vendor } from '../../data/types';
import { VendorCard } from './VendorCard';
import { getMinPriceForVariant } from '../../data/vendors';
import { getVariantsByCategory, getVariantById } from '../../data/materials';

type Props = {
  vendors: Vendor[];
  /** If provided, show a price hint for each vendor's cheapest variant in this category. */
  showPriceHintFromCategoryId?: string;
};

export const VendorCarousel: React.FC<Props> = ({
  vendors,
  showPriceHintFromCategoryId,
}) => {
  const computePriceHint = (vendor: Vendor) => {
    if (!showPriceHintFromCategoryId) return undefined;
    // Find this vendor's cheapest material in the category
    const categoryVariants = getVariantsByCategory(showPriceHintFromCategoryId);
    const matched = vendor.materials
      .map((m) => {
        const variant = categoryVariants.find((v) => v.id === m.variantId);
        if (!variant) return null;
        return { price: m.price, unit: variant.unit };
      })
      .filter((x): x is { price: number; unit: string } => x !== null)
      .sort((a, b) => a.price - b.price);
    return matched[0];
  };

  return (
    <FlatList
      horizontal
      data={vendors}
      keyExtractor={(v) => v.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 4 }}
      renderItem={({ item }) => (
        <VendorCard vendor={item} priceHint={computePriceHint(item)} />
      )}
    />
  );
};

// Silence unused-import warning when tree-shaking
void getMinPriceForVariant;
void getVariantById;
