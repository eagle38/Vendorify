import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Vendor } from '../../data/types';
import { colors } from '../../theme/colors';
import { Badge } from '../ui/Badge';
import { useAppStore } from '../../lib/store';

type Props = { vendor: Vendor };

export const VendorHeader: React.FC<Props> = ({ vendor }) => {
  const isSaved = useAppStore((s) => s.isSaved(vendor.id));
  const toggleSaved = useAppStore((s) => s.toggleSaved);

  return (
    <View>
      {/* Banner */}
      <View
        style={{
          height: 200,
          backgroundColor: vendor.bannerColor,
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 20,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Pressable
            onPress={() => toggleSaved(vendor.id)}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: 10,
              borderRadius: 999,
            }}
            hitSlop={10}
          >
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color="#FFFFFF"
            />
          </Pressable>
        </View>
        {vendor.verified && (
          <Badge label="Verified vendor" variant="verified" icon="checkmark-circle" />
        )}
      </View>

      {/* Body */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 18,
          backgroundColor: colors.bg,
        }}
      >
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_700Bold',
            fontSize: 28,
            color: colors.ink,
            letterSpacing: -0.5,
          }}
        >
          {vendor.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 13,
            color: colors.inkSoft,
            marginTop: 4,
          }}
        >
          {vendor.area}
        </Text>

        {/* Rating row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Ionicons name="star" size={14} color={colors.accent} />
          <Text
            style={{
              fontFamily: 'Inter_600SemiBold',
              fontSize: 13,
              color: colors.ink,
              marginLeft: 4,
            }}
          >
            {vendor.rating.toFixed(1)}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              color: colors.inkFaint,
              marginLeft: 4,
            }}
          >
            ({vendor.reviewCount} reviews)
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              color: colors.inkFaint,
              marginLeft: 10,
            }}
          >
            · {vendor.distanceKm} km away
          </Text>
        </View>

        {/* Bio */}
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 14,
            color: colors.inkSoft,
            lineHeight: 21,
            marginTop: 14,
          }}
        >
          {vendor.bio}
        </Text>
      </View>
    </View>
  );
};
