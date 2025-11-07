# 🎂 JC Project - Birthday 3D Experience

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Uma experiência 3D interativa e personalizada para celebrar um aniversário especial 💕**

*Desenvolvido por João para Camila*

[🎮 Demo](#funcionalidades) · [🚀 Instalação](#instalação) · [📖 Documentação](#tecnologias)

</div>

---

## 📝 Sobre o Projeto

**JC Project** (João & Camila) é uma aplicação web 3D interativa criada para celebrar o aniversário da Camila de uma forma única e especial. O projeto combina animações suaves, modelos 3D personalizados e uma mensagem de amor em um ambiente imersivo.

### ✨ O que torna este projeto especial?

- 🎨 **Interface 3D Interativa**: Navegue livremente por uma cena 3D personalizada
- 💌 **Mensagem Personalizada**: Carta de aniversário interativa com mensagem romântica
- 🎂 **Elementos Temáticos**: Bolo, vela acesa, porta-retratos e decorações
- 🌃 **Ambiente Imersivo**: Background 360° de cidade noturna
- ⚡ **Animações Fluídas**: Sequência de entrada cinematográfica dos elementos
- 🕯️ **Interatividade**: Vela que pode ser apagada e acesa ao clicar

---

## 🎯 Funcionalidades

### 1️⃣ Introdução com Efeito Typing
- Texto digitado em tempo real estilo terminal
- Mensagem personalizada de abertura
- Transição suave para a cena 3D

### 2️⃣ Sequência de Animação Cinematográfica
Ao entrar na cena 3D, os elementos aparecem em ordem:
1. **Bolo** aparece crescendo do centro (0.5s)
2. **Vela** desce suavemente e pousa no bolo (1.5s)
3. **Mesa** surge com fade in gradual (2.5s)
4. **Porta-retratos** aparecem em sequência (3.0s - 4.4s)
5. **Carta de aniversário** surge por último (4.8s)

### 3️⃣ Elementos Interativos

#### 🕯️ Vela Animada
- Chama com efeito de tremulação realista
- Iluminação dinâmica que pisca
- **Clique para apagar/acender** a vela
- Duas luzes pontuais para brilho quente

#### 💌 Carta de Aniversário
- **Clique para abrir** e ler a mensagem
- Modal centralizado com texto personalizado
- Botão de fechar estilizado
- Animação de entrada suave

#### 🖼️ Porta-retratos Personalizados
- 4 porta-retratos com fotos customizadas
- Posicionamento estratégico ao redor da mesa
- Texturas de alta qualidade

### 4️⃣ Controles de Câmera
- **Arrastar**: Rotacionar ao redor da cena
- **Scroll**: Zoom in/out
- **Pan**: Mover a câmera lateralmente
- Limites configurados para melhor experiência

### 5️⃣ Iluminação Profissional
- Luz ambiente suave
- Spotlight principal no topo
- 3 luzes coloridas (azul, rosa, dourado)
- Iluminação dinâmica da vela

---

## 🛠️ Tecnologias

### Core
- **React 18** - Biblioteca para UI
- **Vite** - Build tool ultra-rápido
- **Three.js** - Renderização 3D

### Bibliotecas 3D
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers úteis para R3F
  - `useGLTF` - Carregamento de modelos 3D
  - `useTexture` - Carregamento de texturas
  - `PerspectiveCamera` - Câmera personalizada
  - `OrbitControls` - Controles de órbita
  - `Html` - Elementos HTML na cena 3D

### Recursos 3D
- **Modelos glTF**: Bolo, mesa, vela, porta-retrato, carta
- **Texturas PNG/JPG**: Fotos personalizadas, background 360°
- **Materiais**: Standard, Basic, Emissive

---

## 📂 Estrutura do Projeto

```
CJProject/
├── public/
│   └── img/
│       ├── photo1.png          # Foto personalizada 1
│       ├── photo2.png          # Foto personalizada 2
│       ├── photo3.png          # Foto personalizada 3
│       ├── photo4.png          # Foto personalizada 4
│       └── ibiraa.png          # Background 360°
├── src/
│   ├── components/
│   │   ├── BirthdayCandle/
│   │   │   └── index.jsx       # Vela com chama animada
│   │   ├── BirthdayCard/
│   │   │   └── index.jsx       # Carta interativa com modal
│   │   ├── Cake/
│   │   │   └── index.jsx       # Modelo do bolo
│   │   ├── CityBackground360/
│   │   │   └── index.jsx       # Background esférico 360°
│   │   ├── PhotoFrame/
│   │   │   └── index.jsx       # Porta-retrato com foto custom
│   │   ├── Scene3D/
│   │   │   └── index.jsx       # Cena principal 3D
│   │   ├── Table/
│   │   │   └── index.jsx       # Mesa de madeira
│   │   └── TypingText/
│   │       └── index.jsx       # Efeito de digitação
│   ├── objects/
│   │   ├── birthday_candle/    # Modelo 3D da vela
│   │   ├── letter/             # Modelo 3D da carta
│   │   ├── photo_frame_low_poly_speed_model/  # Modelo do porta-retrato
│   │   ├── strawberry_cake/    # Modelo do bolo
│   │   └── table/              # Modelo da mesa
│   ├── App.jsx                 # Componente principal
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/jc-project.git
cd jc-project
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

5. **Build para produção**
```bash
npm run build
```

---

## 🎨 Personalização

### Trocar Fotos dos Porta-retratos
1. Adicione suas fotos em `public/img/`
2. Nomeie como `photo1.png`, `photo2.png`, etc.
3. As fotos serão carregadas automaticamente

### Alterar Background 360°
1. Substitua `public/img/ibiraa.png` por sua imagem equirectangular
2. Recomendado: 4096x2048 pixels para melhor qualidade

### Modificar Mensagem da Carta
Edite o arquivo `src/components/BirthdayCard/index.jsx`:
```jsx
<div style={{ color: '#666', fontSize: '13px', ... }}>
  {/* Sua mensagem aqui */}
</div>
```

### Ajustar Mensagem de Intro
Edite o arquivo `src/App.jsx`:
```jsx
const messages = [
  " > Sua mensagem personalizada aqui...",
];
```

---

## ⚙️ Configurações Técnicas

### Performance
- **Sphere Radius**: 1500 (background 360°)
- **Texture Filtering**: LinearMipmapLinear para qualidade
- **Anisotropy**: Máximo suportado pelo GPU
- **Geometry Segments**: Otimizado (64x64) para evitar sobrecarga

### Câmera
- **Position**: [0, 0.8, 1.2] - Vista próxima da mesa
- **FOV**: 70° - Campo de visão amplo
- **Min Distance**: 0.8 - Zoom máximo
- **Max Distance**: 20 - Zoom mínimo

### Animações
- **Timing Function**: Cubic ease-out
- **Frame Rate**: 60 FPS
- **Delay System**: Baseado em frames para precisão

---

## 🎭 Detalhes de Implementação

### Sistema de Animação Sequencial
Cada componente possui:
- `animated` prop para ativar animação de entrada
- `delay` prop para controle de timing
- `useFrame` hook para animação frame-by-frame
- Easing cúbico para movimento natural

### Substituição de Texturas
Os porta-retratos usam um sistema inteligente:
1. Carrega o modelo glTF base
2. Clona a cena para não modificar o original
3. Percorre todos os meshes (`traverse`)
4. Encontra materiais específicos (PhotoFrame_MAT)
5. Substitui a textura mantendo outras propriedades

### Controle de Estado
- React hooks (`useState`, `useEffect`, `useRef`)
- Estados globais em `App.jsx`
- Estados locais nos componentes individuais
- Sincronização precisa entre animações

---

## 🐛 Troubleshooting

### WebGL Context Lost
**Problema**: Tela preta ou erro "Context Lost"  
**Solução**: 
- Use imagens menores (máx 2048x1024)
- Reduza a complexidade dos modelos 3D
- Diminua os segmentos da geometria

### Animações Lentas
**Problema**: Animações travando  
**Solução**:
- Reduza o número de luzes na cena
- Use `meshBasicMaterial` no background
- Otimize as texturas (compressão JPG)

### Fotos não Aparecem
**Problema**: Porta-retratos sem imagem  
**Solução**:
- Verifique os caminhos em `public/img/`
- Use formato PNG ou JPG
- Confirme que `flipY: false` está setado

---

## 📜 Licença

Este é um projeto pessoal desenvolvido com 💖 por João para Camila.

---

## 🙏 Agradecimentos

- **Three.js Community** - Pela incrível biblioteca 3D
- **React Three Fiber** - Por tornar Three.js + React uma experiência incrível
- **Sketchfab** - Pelos modelos 3D utilizados
- **Você, Camila** - Por ser a inspiração deste projeto ❤️

---

<div align="center">

### 💝 Feito com amor por João

**Feliz Aniversário, Camila!** 🎂🎉

*"só o amor constrói pontes indestrutíveis"*

</div>