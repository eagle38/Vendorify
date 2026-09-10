import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Vendor } from '../../data/types';
import { colors } from '../../theme/colors';
import { openWhatsApp, callVendor } from '../../lib/contact';

type Props = { vendor: Vendor };

export const ContactBar: React.FC<Props> = ({ vendor }) => (
  <SafeAreaView
    edges={['bottom']}
    style={{
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.line,
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 12,
        gap: 10,
      }}
    >
      {/* WhatsApp — primary (PK norm) */}
      <Pressable
        onPress={() => openWhatsApp(vendor.whatsapp, vendor.name)}
        style={({ pressed }) => ({
          flex: 1.4,
          backgroundColor: colors.ink,
          paddingVertical: 14,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <Ionicons name="logo-whatsapp" size={18} color="#FFFFFF" />
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Inter_600SemiBold',
            fontSize: 15,
            marginLeft: 8,
          }}
        >
          WhatsApp
        </Text>
      </Pressable>

      {/* Call — secondary */}
      <Pressable
        onPress={() => callVendor(vendor.phone)}
        style={({ pressed }) => ({
          flex: 1,
          backgroundColor: colors.surface,
          paddingVertical: 14,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1.5,
          borderColor: colors.ink,
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <Ionicons name="call" size={18} color={colors.ink} />
        <Text
          style={{
            color: colors.ink,
            fontFamily: 'Inter_600SemiBold',
            fontSize: 15,
            marginLeft: 8,
          }}
        >
          Call
        </Text>
      </Pressable>
    </View>
  </SafeAreaView>
);
