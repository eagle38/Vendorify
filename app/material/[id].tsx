import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '../../theme/colors';
import { getCategoryById } from '../../data/categories';
import { getVariantsByCategory } from '../../data/materials';
import { getVendorsByVariant } from '../../data/vendors';
import { Badge } from '../../components/ui/Badge';
import { Chip } from '../../components/ui/Chip';
import { formatPKR, verdictFor } from '../../lib/price';

export default function MaterialScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const category = getCategoryById(id ?? '');
  const variants = useMemo(() => (id ? getVariantsByCategory(id) : []), [id]);

  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const variant = variants.find((v) => v.id === selectedVariantId);

  const offerings = useMemo(
    () =>
      variant
        ? getVendorsByVariant(variant.id).sort((a, b) => a.price - b.price)
        : [],
    [variant],
  );

  if (!category) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg, padding: 20 }}>
        <Text>Category not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.bg }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 8,
          paddingBottom: 6,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          hitSlop={12}
          style={{ marginRight: 8, padding: 4 }}
        >
          <Ionicons name="chevron-back" size={24} color={colors.ink} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: 'PlayfairDisplay_700Bold',
              fontSize: 26,
              color: colors.ink,
              letterSpacing: -0.5,
            }}
          >
            {category.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              color: colors.inkFaint,
              marginTop: 2,
            }}
          >
            {category.stage === 'grey' ? 'Grey Structure' : 'Base Finishing'} · {category.vendorType}
          </Text>
        </View>
      </View>

      {/* Variant chips */}
      <View style={{ marginTop: 14, paddingBottom: 4 }}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontFamily: 'Inter_500Medium',
            fontSize: 11,
            color: colors.inkFaint,
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 10,
          }}
        >
          Select grade / type
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {variants.map((v) => (
            <Chip
              key={v.id}
              label={v.spec}
              active={selectedVariantId === v.id}
              onPress={() => setSelectedVariantId(v.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Market avg banner */}
      {variant && (
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            padding: 14,
            borderRadius: 12,
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.line,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: colors.chip,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}
          >
            <Ionicons name="bar-chart-outline" size={18} color={colors.inkSoft} />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: 'Inter_400Regular',
                fontSize: 11,
                color: colors.inkFaint,
                textTransform: 'uppercase',
                letterSpacing: 0.8,
              }}
            >
              Market average
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 17,
                color: colors.ink,
                marginTop: 1,
              }}
            >
              {formatPKR(variant.marketAvg)}{' '}
              <Text style={{ color: colors.inkFaint, fontSize: 12 }}>per {variant.unit}</Text>
            </Text>
          </View>
        </View>
      )}

      {/* Vendor offerings list, sorted cheapest first */}
      <FlatList
        data={offerings}
        keyExtractor={(o) => o.vendor.id}
        style={{ marginTop: 14 }}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListHeaderComponent={
          <Text
            style={{
              paddingHorizontal: 20,
              fontFamily: 'Inter_500Medium',
              fontSize: 11,
              color: colors.inkFaint,
              textTransform: 'uppercase',
              letterSpacing: 1,
              marginBottom: 6,
              marginTop: 6,
            }}
          >
            {offerings.length} vendor{offerings.length === 1 ? '' : 's'} selling this
          </Text>
        }
        renderItem={({ item }) => {
          const v = verdictFor(item.price, variant?.marketAvg ?? item.price);
          return (
            <Pressable
              onPress={() => router.push(`/vendor/${item.vendor.id}`)}
              style={({ pressed }) => ({
                marginHorizontal: 20,
                marginBottom: 10,
                padding: 14,
                backgroundColor: colors.surface,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: colors.line,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: pressed ? 0.92 : 1,
              })}
            >
              <View style={{ flex: 1, paddingRight: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontFamily: 'PlayfairDisplay_700Bold',
                      fontSize: 16,
                      color: colors.ink,
                      letterSpacing: -0.2,
                    }}
                  >
                    {item.vendor.name}
                  </Text>
                  {item.vendor.verified && (
                    <Ionicons
                      name="checkmark-circle"
                      size={14}
                      color={colors.accent}
                      style={{ marginLeft: 6 }}
                    />
                  )}
                </View>
                <Text
                  style={{
                    fontFamily: 'Inter_400Regular',
                    fontSize: 11,
                    color: colors.inkFaint,
                    marginTop: 3,
                  }}
                >
                  {item.vendor.area}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 6,
                  }}
                >
                  <Ionicons name="star" size={11} color={colors.accent} />
                  <Text
                    style={{
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 11,
                      color: colors.ink,
                      marginLeft: 3,
                    }}
                  >
                    {item.vendor.rating.toFixed(1)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Inter_400Regular',
                      fontSize: 11,
                      color: colors.inkFaint,
                      marginLeft: 8,
                    }}
                  >
                    · {item.vendor.distanceKm} km
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={{
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 17,
                    color:
                      v === 'below'
                        ? colors.below
                        : v === 'above'
                          ? colors.above
                          : colors.ink,
                  }}
                >
                  {formatPKR(item.price)}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Inter_400Regular',
                    fontSize: 10,
                    color: colors.inkFaint,
                    marginTop: 1,
                  }}
                >
                  per {variant?.unit}
                </Text>
                {v !== 'even' && (
                  <View style={{ marginTop: 6 }}>
                    <Badge
                      label={v === 'below' ? 'Below avg' : 'Above avg'}
                      variant={v}
                    />
                  </View>
                )}
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
