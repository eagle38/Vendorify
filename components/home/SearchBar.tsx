import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

type Props = {
  placeholder?: string;
  onPress?: () => void;       // if provided, render as a tappable bar
  value?: string;
  onChangeText?: (t: string) => void;
};

export const SearchBar: React.FC<Props> = ({
  placeholder = 'What are you buying today?',
  onPress,
  value,
  onChangeText,
}) => {
  const Inner = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: colors.line,
      }}
    >
      <Ionicons name="search" size={18} color={colors.inkSoft} style={{ marginRight: 10 }} />
      {onPress ? (
        <TextInput
          editable={false}
          placeholder={placeholder}
          placeholderTextColor={colors.inkFaint}
          pointerEvents="none"
          style={{
            flex: 1,
            fontFamily: 'Inter_400Regular',
            fontSize: 14,
            color: colors.ink,
          }}
        />
      ) : (
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.inkFaint}
          style={{
            flex: 1,
            fontFamily: 'Inter_400Regular',
            fontSize: 14,
            color: colors.ink,
          }}
        />
      )}
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}>
        {Inner}
      </Pressable>
    );
  }
  return Inner;
};
