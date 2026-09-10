import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

type Props = {
  label: string;
  active?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export const Chip: React.FC<Props> = ({ label, active, icon, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => ({
      backgroundColor: active ? colors.ink : colors.chip,
      paddingHorizontal: 14,
      paddingVertical: 9,
      borderRadius: 999,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
      opacity: pressed ? 0.7 : 1,
    })}
  >
    {icon && (
      <Ionicons
        name={icon}
        size={14}
        color={active ? '#FFFFFF' : colors.inkSoft}
        style={{ marginRight: 6 }}
      />
    )}
    <Text
      style={{
        color: active ? '#FFFFFF' : colors.ink,
        fontSize: 13,
        fontFamily: 'Inter_500Medium',
      }}
    >
      {label}
    </Text>
  </Pressable>
);
