import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

let Gyroscope;
try {
  Gyroscope = require('expo-sensors').Gyroscope;
} catch (error) {
  console.warn('expo-sensors not available');
}

export const useGyroscope = (enabled = true, shadow = false) => {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
  const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let subscription;

    if (Platform.OS === 'web') {
      // Web: usar mouse movement
      const handleMouseMove = (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = (event.clientX - centerX) / centerX; // -1 to 1
        const y = (event.clientY - centerY) / centerY; // -1 to 1
        setMouseData({ x, y });
      };

      window.addEventListener('mousemove', handleMouseMove);
      setIsAvailable(true);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    } else {
      // Mobile: usar giroscopio
      if (!Gyroscope) return;

      const checkAvailability = async () => {
        try {
          const available = await Gyroscope.isAvailableAsync();
          setIsAvailable(available);

          if (available) {
            Gyroscope.setUpdateInterval(100);
            subscription = Gyroscope.addListener((gyroscopeData) => {
              setGyroscopeData(gyroscopeData);
            });
          }
        } catch (error) {
          console.warn('Gyroscope not available:', error);
          setIsAvailable(false);
        }
      };

      checkAvailability();

      return () => {
        if (subscription) {
          subscription.remove();
        }
      };
    }
  }, [enabled]);

  const getGlassLighting = () => {
    const borderStyles = {
      borderTopColor: 'rgba(255, 255, 255, 0.3)',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    };

    const staticShadowStyles = shadow
      ? Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
          },
          android: {
            elevation: 4,
          },
          web: {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
          },
        })
      : {};

    if (!isAvailable) {
      return {
        ...borderStyles,
        ...staticShadowStyles,
      };
    }

    let x, y;
    if (Platform.OS === 'web') {
      x = mouseData.x; // -1 a 1
      y = mouseData.y; // -1 a 1
    } else {
      x = gyroscopeData.y; // Usar Y del giroscopio para X visual
      y = gyroscopeData.x; // Usar X del giroscopio para Y visual
    }

    // Intensidad del borde superior según orientación
    const topBorderIntensity = Math.max(0.1, 0.4 + y * 0.3); // Más brillo cuando se inclina hacia la luz

    const dynamicBorderStyles = {
      borderTopColor: `rgba(255, 255, 255, ${topBorderIntensity})`,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    };

    // Solo aplicar sombra dinámica si shadow=true
    const dynamicShadowStyles = shadow
      ? (() => {
          const shadowOffsetX = x * 2;
          const shadowOffsetY = Math.max(1, 3 + y * 2); // Sombra más pronunciada cuando se inclina hacia abajo
          const shadowIntensity = Math.max(0.02, 0.08 + Math.abs(y) * 0.05);

          return Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: shadowOffsetX, height: shadowOffsetY },
              shadowOpacity: shadowIntensity,
              shadowRadius: 2,
            },
            android: {
              elevation: Math.max(2, 4 + Math.abs(y) * 4),
            },
            web: {
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px 4px 0 rgba(0, 0, 0, ${shadowIntensity})`,
            },
          });
        })()
      : {};

    return {
      ...dynamicBorderStyles,
      ...dynamicShadowStyles,
    };
  };

  return {
    gyroscopeData,
    mouseData,
    isAvailable,
    getGlassLighting,
  };
};
