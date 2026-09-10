import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme/colors';
import { useAppStore } from '../../lib/store';
import { StageToggle } from '../../components/home/StageToggle';
import { SearchBar } from '../../components/home/SearchBar';
import { MaterialChips } from '../../components/home/MaterialChips';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { VendorCarousel } from '../../components/home/VendorCarousel';
import {
  getFeaturedVendors,
  getVendorsByCategory,
} from '../../data/vendors';
import { getCategoriesByStage } from '../../data/categories';

export default function HomeScreen() {
  const router = useRouter();
  const stage = useAppStore((s) => s.stage);
  const featured = getFeaturedVendors(stage);
  const categories = getCategoriesByStage(stage);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.bg }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* ── Editorial header ── */}
        <View style={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="location" size={14} color={colors.inkSoft} />
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                fontSize: 12,
                color: colors.inkSoft,
                marginLeft: 4,
                letterSpacing: 0.3,
              }}
            >
              Islamabad · Rawalpindi
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'PlayfairDisplay_700Bold',
              fontSize: 34,
              color: colors.ink,
              letterSpacing: -0.8,
              marginTop: 6,
              lineHeight: 40,
            }}
          >
            Build your home,{'\n'}without being blind.
          </Text>
        </View>

        {/* ── Stage toggle ── */}
        <StageToggle />

        {/* ── Search bar (tap goes to search tab) ── */}
        <View style={{ marginTop: 14 }}>
          <SearchBar onPress={() => router.push('/search')} />
        </View>

        {/* ── Quick-access material chips ── */}
        <View style={{ marginTop: 6 }}>
          <Text
            style={{
              paddingHorizontal: 20,
              marginTop: 16,
              fontFamily: 'Inter_500Medium',
              fontSize: 11,
              color: colors.inkFaint,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            What are you buying?
          </Text>
          <MaterialChips />
        </View>

        {/* ── Featured vendors ── */}
        <SectionHeader
          title="Verified vendors"
          subtitle={`Trusted suppliers near you`}
          onSeeAll={() => router.push('/search')}
        />
        <VendorCarousel vendors={featured} />

        {/* ── One carousel per category ── */}
        {categories.map((cat) => {
          const list = getVendorsByCategory(stage, cat.vendorType);
          if (list.length === 0) return null;
          return (
            <View key={cat.id}>
              <SectionHeader
                title={cat.name}
                subtitle={`${list.length} vendor${list.length === 1 ? '' : 's'}`}
                onSeeAll={() => router.push(`/material/${cat.id}`)}
              />
              <VendorCarousel
                vendors={list}
                showPriceHintFromCategoryId={cat.id}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
