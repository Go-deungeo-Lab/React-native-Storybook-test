import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
  variant?: 'primary' | 'secondary' | 'gradient';
};

export const MyButton = ({ onPress, text, variant = 'primary' }: MyButtonProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
            style={[styles.container, styles[variant]]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
        >
          <Text style={[styles.text, variant === 'secondary' && styles.secondaryText]}>
            {text}
          </Text>
        </TouchableOpacity>
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primary: {
    backgroundColor: '#6366F1',
  },
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6366F1',
  },
  gradient: {
    backgroundColor: '#4F46E5',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: '#6366F1',
  },
});