import React, { useState, useMemo } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme/colors';
import { SearchBar } from '../../components/home/SearchBar';
import { categories } from '../../data/categories';
import { variants } from '../../data/materials';
import { vendors } from '../../data/vendors';

type Hit =
  | { kind: 'material'; id: string; label: string; sub: string }
  | { kind: 'vendor'; id: string; label: string; sub: string };

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const hits = useMemo<Hit[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const out: Hit[] = [];

    // Match categories
    categories.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.vendorType.toLowerCase().includes(q)) {
        out.push({
          kind: 'material',
          id: c.id,
          label: c.name,
          sub: `${c.stage === 'grey' ? 'Grey Structure' : 'Base Finishing'} · ${c.vendorType}`,
        });
      }
    });

    // Match variants by spec
    variants.forEach((v) => {
      if (v.spec.toLowerCase().includes(q)) {
        const cat = categories.find((c) => c.id === v.categoryId);
        if (cat && !out.find((h) => h.kind === 'material' && h.id === cat.id)) {
          out.push({
            kind: 'material',
            id: cat.id,
            label: cat.name,
            sub: `Matches "${v.spec}"`,
          });
        }
      }
    });

    // Match vendors
    vendors.forEach((v) => {
      if (
        v.name.toLowerCase().includes(q) ||
        v.area.toLowerCase().includes(q) ||
        v.vendorTypes.some((t) => t.toLowerCase().includes(q))
      ) {
        out.push({
          kind: 'vendor',
          id: v.id,
          label: v.name,
          sub: v.area,
        });
      }
    });

    return out.slice(0, 30);
  }, [query]);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 6 }}>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_700Bold',
            fontSize: 28,
            color: colors.ink,
            letterSpacing: -0.5,
          }}
        >
          Search
        </Text>
      </View>
      <View style={{ marginTop: 6 }}>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Cement, steel, tiles, vendor name..."
        />
      </View>

      <ScrollView style={{ flex: 1, marginTop: 8 }} contentContainerStyle={{ paddingBottom: 40 }}>
        {!query.trim() && (
          <View style={{ paddingHorizontal: 20, paddingTop: 24 }}>
            <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 13, color: colors.inkFaint }}>
              Try searching for a material like "cement" or "10mm rebar", or a vendor name.
            </Text>
          </View>
        )}
        {hits.map((h) => (
          <Pressable
            key={`${h.kind}-${h.id}`}
            onPress={() =>
              h.kind === 'material'
                ? router.push(`/material/${h.id}`)
                : router.push(`/vendor/${h.id}`)
            }
            style={({ pressed }) => ({
              paddingHorizontal: 20,
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: colors.line,
              backgroundColor: pressed ? colors.chip : 'transparent',
              flexDirection: 'row',
              alignItems: 'center',
            })}
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
              <Ionicons
                name={h.kind === 'material' ? 'cube-outline' : 'storefront-outline'}
                size={18}
                color={colors.inkSoft}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 14, color: colors.ink }}>
                {h.label}
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  color: colors.inkFaint,
                  marginTop: 2,
                }}
              >
                {h.sub}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={colors.inkFaint} />
          </Pressable>
        ))}
        {query.trim() && hits.length === 0 && (
          <View style={{ paddingHorizontal: 20, paddingTop: 30, alignItems: 'center' }}>
            <Ionicons name="cloud-offline-outline" size={36} color={colors.inkFaint} />
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                color: colors.inkSoft,
                marginTop: 10,
              }}
            >
              No matches for "{query}"
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
