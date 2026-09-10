import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { useAppStore } from '../../lib/store';
import { Stage } from '../../data/types';

const Option: React.FC<{
  label: string;
  active: boolean;
  onPress: () => void;
}> = ({ label, active, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      flex: 1,
      paddingVertical: 10,
      borderRadius: 999,
      backgroundColor: active ? colors.ink : 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text
      style={{
        color: active ? '#FFFFFF' : colors.inkSoft,
        fontFamily: active ? 'Inter_600SemiBold' : 'Inter_500Medium',
        fontSize: 13,
        letterSpacing: 0.3,
      }}
    >
      {label}
    </Text>
  </Pressable>
);

export const StageToggle: React.FC = () => {
  const stage = useAppStore((s) => s.stage);
  const setStage = useAppStore((s) => s.setStage);

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.chip,
        borderRadius: 999,
        padding: 4,
        marginHorizontal: 20,
        marginTop: 8,
      }}
    >
      <Option
        label="Grey Structure"
        active={stage === 'grey'}
        onPress={() => setStage('grey')}
      />
      <Option
        label="Base Finishing"
        active={stage === 'finishing'}
        onPress={() => setStage('finishing')}
      />
    </View>
  );
};
