import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SafetyScoreCardProps {
  score: number;
  status: string;
}

export default function SafetyScoreCard({ score, status }: SafetyScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10B981';
    if (score >= 60) return '#F59E0B';
    return '#EF4444';
  };

  const getStatusText = (score: number) => {
    if (score >= 80) return 'SAFE';
    if (score >= 60) return 'CAUTION';
    return 'DANGER';
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Safety Score</Text>
          <Text style={styles.subtitle}>Current location status</Text>
        </View>
        <View style={styles.scoreContainer}>
          <View style={[styles.iconContainer, { backgroundColor: `${getScoreColor(score)}20` }]}>
            <Ionicons name="shield-checkmark" size={20} color={getScoreColor(score)} />
          </View>
          <View style={styles.scoreTextContainer}>
            <Text style={[styles.scoreNumber, { color: getScoreColor(score) }]}>{score}</Text>
            <Text style={styles.scoreLabel}>{getStatusText(score)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  scoreTextContainer: {
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Poppins-Regular',
  },
});