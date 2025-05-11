import React from 'react';
import { View, ViewStyle } from 'react-native';

/**
 * Props del componente Separator.
 */
export interface SeparatorProps {
  /**
   * Tamaño del separador en píxeles.
   * - En orientación horizontal, representa la **altura**.
   * - En orientación vertical, representa el **ancho**.
   * @default 1
   */
  height?: number;

  /**
   * Dirección del separador:
   * - `'horizontal'`: línea horizontal (por defecto).
   * - `'vertical'`: línea vertical.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Un separador visual para React Native que puede ser horizontal o vertical.
 *
 * @example
 * // Separador horizontal de 1px (por defecto)
 * <Separator />
 *
 * @example
 * // Separador vertical de 16px
 * <Separator height={16} orientation="vertical" />
 */
const Separator: React.FC<SeparatorProps> = ({
  height = 1,
  orientation = 'horizontal',
}) => {
  const separatorStyle: ViewStyle =
    orientation === 'vertical'
      ? { width: height, height: '100%' }
      : { height: height, width: '100%' };

  return <View style={separatorStyle} />;
};

export default Separator;
