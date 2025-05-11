# React Native Separator

[![npm version](https://img.shields.io/npm/v/@react-native-separator/core.svg)](https://www.npmjs.com/package/@react-native-separator/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un componente ligero y versátil para crear separadores en tus aplicaciones React Native. Ideal para organizar y estructurar contenido de manera profesional.

## Características Principales

- 🎨 **Sencillo pero potente**: Solo dos props para controlar todo
- 📱 **Responsive**: Se adapta automáticamente al tamaño de la pantalla
- 📦 **Ligero**: Sin dependencias adicionales
- 🎯 **Preciso**: Control total sobre el tamaño en píxeles
- 🔧 **Flexibilidad**: Horizontal y vertical con un solo componente

## Instalación

```bash
npm install @react-native-separator/core
# o
yarn add @react-native-separator/core
```

## Uso

```tsx
import Separator from '@react-native-separator/core';

// Uso horizontal (por defecto)
<Separator height={1} />

// Uso vertical
<Separator height={16} orientation="vertical" />
```

## Props

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `height` | `number` | `1` | Tamaño del separador en píxeles |
| `orientation` | `'horizontal'`<br>`'vertical'` | `'horizontal'` | Dirección del separador |

## Ejemplos

```tsx
// Separador horizontal simple
<Separator />

// Separador vertical más grueso
<Separator height={16} orientation="vertical" />

// En un layout completo
<View style={{ padding: 16 }}>
  <Text>Primero</Text>
  <Separator height={20} />
  <Text>Segundo</Text>

  <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text>Columna A</Text>
    <Separator height={16} orientation="vertical" />
    <Text>Columna B</Text>
  </View>
</View>
```