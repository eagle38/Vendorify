import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

type Props = {
  label: string;
  variant?: 'verified' | 'neutral' | 'below' | 'above';
  icon?: keyof typeof Ionicons.glyphMap;
};

const styleFor = (variant: Props['variant']) => {
  switch (variant) {
    case 'verified':
      return { bg: colors.accent, fg: '#FFFFFF' };
    case 'below':
      return { bg: '#E0F0E8', fg: colors.below };
    case 'above':
      return { bg: '#F7E0DC', fg: colors.above };
    default:
      return { bg: colors.chip, fg: colors.inkSoft };
  }
};

export const Badge: React.FC<Props> = ({ label, variant = 'neutral', icon }) => {
  const s = styleFor(variant);
  return (
    <View
      style={{
        backgroundColor: s.bg,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 999,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
      }}
    >
      {icon && <Ionicons name={icon} size={11} color={s.fg} style={{ marginRight: 4 }} />}
      <Text
        style={{
          color: s.fg,
          fontSize: 11,
          fontFamily: 'Inter_600SemiBold',
          letterSpacing: 0.2,
        }}
      >
        {label}
      </Text>
    </View>
  );
};
