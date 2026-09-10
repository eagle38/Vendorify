import React from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Chip } from '../ui/Chip';
import { useAppStore } from '../../lib/store';
import { getCategoriesByStage } from '../../data/categories';
import { Ionicons } from '@expo/vector-icons';

export const MaterialChips: React.FC = () => {
  const router = useRouter();
  const stage = useAppStore((s) => s.stage);
  const cats = getCategoriesByStage(stage);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 4 }}
      style={{ marginTop: 12 }}
    >
      {cats.map((c) => (
        <Chip
          key={c.id}
          label={c.name}
          icon={c.icon as keyof typeof Ionicons.glyphMap}
          onPress={() => router.push(`/material/${c.id}`)}
        />
      ))}
    </ScrollView>
  );
};
