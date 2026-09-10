import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

type Props = {
  title: string;
  subtitle?: string;
  onSeeAll?: () => void;
};

export const SectionHeader: React.FC<Props> = ({ title, subtitle, onSeeAll }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: 20,
      marginTop: 28,
      marginBottom: 12,
    }}
  >
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontFamily: 'PlayfairDisplay_700Bold',
          fontSize: 22,
          color: colors.ink,
          letterSpacing: -0.3,
        }}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 12,
            color: colors.inkFaint,
            marginTop: 2,
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
    {onSeeAll && (
      <Pressable
        onPress={onSeeAll}
        style={{ flexDirection: 'row', alignItems: 'center' }}
        hitSlop={10}
      >
        <Text
          style={{
            color: colors.ink,
            fontSize: 13,
            fontFamily: 'Inter_500Medium',
          }}
        >
          See all
        </Text>
        <Ionicons name="chevron-forward" size={14} color={colors.ink} />
      </Pressable>
    )}
  </View>
);
