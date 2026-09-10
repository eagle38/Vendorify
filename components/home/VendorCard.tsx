import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Vendor } from '../../data/types';
import { colors } from '../../theme/colors';
import { Badge } from '../ui/Badge';
import { formatPKR } from '../../lib/price';

type Props = {
  vendor: Vendor;
  /** Optional: show a "from PKR X / unit" hint for a specific variant. */
  priceHint?: { price: number; unit: string };
};

export const VendorCard: React.FC<Props> = ({ vendor, priceHint }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/vendor/${vendor.id}`)}
      style={({ pressed }) => ({
        width: 220,
        marginRight: 12,
        backgroundColor: colors.surface,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.line,
        overflow: 'hidden',
        opacity: pressed ? 0.92 : 1,
      })}
    >
      {/* Banner — solid color stand-in until we have real photos */}
      <View
        style={{
          height: 100,
          backgroundColor: vendor.bannerColor,
          justifyContent: 'flex-end',
          padding: 10,
        }}
      >
        {vendor.verified && (
          <Badge label="Verified" variant="verified" icon="checkmark-circle" />
        )}
      </View>

      {/* Body */}
      <View style={{ padding: 12 }}>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: 'PlayfairDisplay_700Bold',
            fontSize: 16,
            color: colors.ink,
            letterSpacing: -0.2,
          }}
        >
          {vendor.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 11,
            color: colors.inkFaint,
            marginTop: 3,
          }}
        >
          {vendor.area}
        </Text>

        {/* Rating + distance row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Ionicons name="star" size={11} color={colors.accent} />
          <Text
            style={{
              fontFamily: 'Inter_600SemiBold',
              fontSize: 11,
              color: colors.ink,
              marginLeft: 3,
            }}
          >
            {vendor.rating.toFixed(1)}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 11,
              color: colors.inkFaint,
              marginLeft: 8,
            }}
          >
            · {vendor.distanceKm} km
          </Text>
        </View>

        {/* Price hint — the unlock that turns this from phonebook into transparency */}
        {priceHint && (
          <View
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: colors.line,
            }}
          >
            <Text
              style={{
                fontFamily: 'Inter_400Regular',
                fontSize: 10,
                color: colors.inkFaint,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              From
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 14,
                color: colors.ink,
                marginTop: 1,
              }}
            >
              {formatPKR(priceHint.price)}{' '}
              <Text style={{ color: colors.inkFaint, fontSize: 11 }}>/ {priceHint.unit}</Text>
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};
