import React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '../../theme/colors';
import { getVendorById } from '../../data/vendors';
import { VendorHeader } from '../../components/vendor/VendorHeader';
import { MaterialGroup } from '../../components/vendor/MaterialGroup';
import { ContactBar } from '../../components/vendor/ContactBar';

export default function VendorScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const vendor = getVendorById(id ?? '');

  if (!vendor) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
        <View style={{ padding: 20 }}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={colors.ink} />
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        {/* Back button floats over banner */}
        <View
          style={{
            position: 'absolute',
            top: 48,
            left: 16,
            zIndex: 10,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: 10,
              borderRadius: 999,
            }}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <VendorHeader vendor={vendor} />
          <MaterialGroup vendor={vendor} />
        </ScrollView>
      </SafeAreaView>
      <ContactBar vendor={vendor} />
    </View>
  );
}
