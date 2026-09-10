import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const Row: React.FC<{ icon: keyof typeof Ionicons.glyphMap; label: string }> = ({
  icon,
  label,
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.line,
    }}
  >
    <Ionicons name={icon} size={18} color={colors.inkSoft} style={{ marginRight: 14 }} />
    <Text style={{ flex: 1, fontFamily: 'Inter_500Medium', fontSize: 15, color: colors.ink }}>
      {label}
    </Text>
    <Ionicons name="chevron-forward" size={16} color={colors.inkFaint} />
  </View>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.bg }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 20 }}>
          <Text
            style={{
              fontFamily: 'PlayfairDisplay_700Bold',
              fontSize: 28,
              color: colors.ink,
              letterSpacing: -0.5,
            }}
          >
            Profile
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: colors.surface,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.line,
          }}
        >
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: colors.ink,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{ color: '#FFFFFF', fontFamily: 'PlayfairDisplay_700Bold', fontSize: 22 }}
            >
              G
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'PlayfairDisplay_700Bold',
              fontSize: 20,
              color: colors.ink,
              marginTop: 10,
            }}
          >
            Guest
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              color: colors.inkFaint,
              marginTop: 2,
            }}
          >
            Sign in to sync saved vendors across devices
          </Text>
        </View>

        <View style={{ marginTop: 14, backgroundColor: colors.surface }}>
          <Row icon="settings-outline" label="Settings" />
          <Row icon="notifications-outline" label="Notifications" />
          <Row icon="help-circle-outline" label="Help & Support" />
          <Row icon="information-circle-outline" label="About W Boys" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
