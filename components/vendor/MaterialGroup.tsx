import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { Badge } from '../ui/Badge';
import { formatPKR, verdictFor } from '../../lib/price';
import { Vendor } from '../../data/types';
import { getCategoryById } from '../../data/categories';
import { getVariantById } from '../../data/materials';

type Props = { vendor: Vendor };

type Row = {
  variantId: string;
  spec: string;
  unit: string;
  marketAvg: number;
  price: number;
};

export const MaterialGroup: React.FC<Props> = ({ vendor }) => {
  // Group vendor.materials by category
  const byCategory = new Map<string, Row[]>();

  vendor.materials.forEach((m) => {
    const variant = getVariantById(m.variantId);
    if (!variant) return;
    const list = byCategory.get(variant.categoryId) ?? [];
    list.push({
      variantId: variant.id,
      spec: variant.spec,
      unit: variant.unit,
      marketAvg: variant.marketAvg,
      price: m.price,
    });
    byCategory.set(variant.categoryId, list);
  });

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 100 }}>
      <Text
        style={{
          fontFamily: 'PlayfairDisplay_700Bold',
          fontSize: 22,
          color: colors.ink,
          marginTop: 24,
          marginBottom: 4,
          letterSpacing: -0.3,
        }}
      >
        Materials offered
      </Text>
      <Text
        style={{
          fontFamily: 'Inter_400Regular',
          fontSize: 12,
          color: colors.inkFaint,
          marginBottom: 16,
        }}
      >
        Prices shown against market average for Islamabad / Rawalpindi
      </Text>

      {Array.from(byCategory.entries()).map(([catId, rows]) => {
        const cat = getCategoryById(catId);
        return (
          <View
            key={catId}
            style={{
              backgroundColor: colors.surface,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: colors.line,
              marginBottom: 14,
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 12,
                backgroundColor: colors.chip,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 13,
                  color: colors.ink,
                  letterSpacing: 0.3,
                  textTransform: 'uppercase',
                }}
              >
                {cat?.name ?? catId}
              </Text>
            </View>

            {rows.map((row, idx) => {
              const verdict = verdictFor(row.price, row.marketAvg);
              return (
                <View
                  key={row.variantId}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderTopWidth: idx === 0 ? 0 : 1,
                    borderTopColor: colors.line,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <View style={{ flex: 1, paddingRight: 12 }}>
                      <Text
                        style={{
                          fontFamily: 'Inter_500Medium',
                          fontSize: 15,
                          color: colors.ink,
                        }}
                      >
                        {row.spec}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Inter_400Regular',
                          fontSize: 11,
                          color: colors.inkFaint,
                          marginTop: 2,
                        }}
                      >
                        per {row.unit} · avg {formatPKR(row.marketAvg)}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text
                        style={{
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 16,
                          color: colors.ink,
                        }}
                      >
                        {formatPKR(row.price)}
                      </Text>
                      {verdict !== 'even' && (
                        <View style={{ marginTop: 4 }}>
                          <Badge
                            label={
                              verdict === 'below'
                                ? 'Below avg'
                                : 'Above avg'
                            }
                            variant={verdict}
                          />
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
