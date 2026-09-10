import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { useAppStore } from '../../lib/store';
import { getVendorById } from '../../data/vendors';
import { VendorCard } from '../../components/home/VendorCard';

export default function SavedScreen() {
  const savedIds = useAppStore((s) => s.savedVendorIds);
  const saved = savedIds.map(getVendorById).filter((v): v is NonNullable<typeof v> => !!v);

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
          Saved
        </Text>
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 12,
            color: colors.inkFaint,
            marginTop: 4,
          }}
        >
          Vendors you've bookmarked
        </Text>
      </View>

      {saved.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}
        >
          <Ionicons name="bookmark-outline" size={48} color={colors.inkFaint} />
          <Text
            style={{
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
              color: colors.inkSoft,
              marginTop: 14,
              textAlign: 'center',
            }}
          >
            No saved vendors yet
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              color: colors.inkFaint,
              marginTop: 6,
              textAlign: 'center',
              maxWidth: 260,
            }}
          >
            Tap the bookmark icon on a vendor's page to save them here.
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {saved.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
