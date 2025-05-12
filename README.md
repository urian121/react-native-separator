# React Native Separator

[![npm version](https://img.shields.io/npm/v/react-native-separator.svg?style=flat-square)](https://www.npmjs.com/package/react-native-separator)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/react-native-separator)
[![npm downloads](https://img.shields.io/npm/dt/react-native-separator.svg?style=flat-square)](https://www.npmjs.com/package/react-native-separator)


**`react-native-separator-ui`** es una librería moderna, intuitiva, liviana y flexible para crear separadores horizontales o verticales en aplicaciones **React Native**. 

Ideal para crear divisiones horizontales y verticales en tus aplicaciones móviles, ayudándote a estructurar y organizar interfaces de forma limpia, profesional y reutilizable.

## Ventajas principales

- 🎨 **Sencillo pero potente**: Solo dos props para controlar todo
- 📱 **Responsive**: Se adapta automáticamente al tamaño de la pantalla
- 📦 **Ligero**: Sin dependencias adicionales
- 🎯 **Preciso**: Control total sobre el tamaño en píxeles
- 🔧 **Flexibilidad**: Horizontal y vertical con un solo componente

## Instalación
Puedes instalar **react-native-separator-ui** usando npm o yarn:

```bash
npm install react-native-separator-ui
# o
yarn add react-native-separator-ui
```

## Uso básico
Puedes usar **react-native-separator-ui** de la siguiente manera:

```tsx
// Importar la librería
import Separator from 'react-native-separator-ui';

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

## 🤝 Únete y Contribuye

Si encuentras algún problema o tienes una idea para mejorar el paquete, por favor abre un issue o envía un pull request
en [GitHub](https://github.com/urian121/react-native-separator)

## 👨‍💻 Desarrollador

**Urian Viera**  
🌐 [urianviera.com](https://www.urianviera.com)  
📺 [YouTube](https://www.youtube.com/WebDeveloperUrianViera)  
💌 [urian1213viera@gmail.com](mailto:urian1213viera@gmail.com)  
☕ [¡Apóyame en PayPal!](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)

## Copyright

© 2025 Urian Viera. Todos los derechos reservados.

## 🛡 License

Distribuido bajo la licencia [MIT](LICENSE)