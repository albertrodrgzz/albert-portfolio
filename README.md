# 💻 Albert Rodríguez | Full-Stack Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

> Portafolio web interactivo de alto rendimiento, diseñado con una estética de terminal avanzada e interfaces tipo "Glassmorphism". Construido para demostrar dominio en el desarrollo frontend moderno y arquitectura escalable.

🔗 **[Visitar Portafolio en Vivo](https://albert-portfolio-chi.vercel.app)**
---

## ⚡ Características Principales

Este proyecto no es una plantilla; ha sido desarrollado desde cero aplicando principios de ingeniería de software y diseño atómico:

- **Arquitectura Moderna:** Uso intensivo de Next.js App Router y Server/Client Components.
- **Rendimiento Nivel Producción:** Puntuaciones perfectas en Core Web Vitals, carga diferida de imágenes (`next/image`) y renderizado optimizado para dispositivos móviles.
- **Micro-interacciones Premium:** 
  - Efectos magnéticos en botones (`Framer Motion`).
  - Lógica de escritura a máquina aislada mediante *Custom Hooks* (`useTypingEffect`).
  - Filtros dinámicos e iluminación reactiva al cursor.
- **Estética Global:** Capa de "Scanlines" y rudio digital (Noise) simulando monitores CRT de alta ingeniería, combinada con degradados esmeralda modernos.
- **100% Responsivo:** Adaptación fluida desde pantallas ultra-anchas hasta dispositivos móviles, desactivando efectos de cálculo pesado en pantallas pequeñas para garantizar 60 FPS.

---

## 🛠️ Stack Tecnológico

**Core:**
- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)

**Infraestructura & DevOps:**
- **Control de Versiones:** Git & GitHub
- **Despliegue:** Vercel (CI/CD Automático)
- **Code Quality:** ESLint, Prettier

---

## 📂 Estructura del Proyecto

El código sigue el patrón de "Separación de Responsabilidades", manteniendo la lógica lejos de la interfaz de usuario:

```text
src/
├── app/                  # Enrutamiento de Next.js (App Router) y Layout Global
├── components/           # Componentes UI reutilizables (Botones, Tarjetas, Secciones)
│   └── layout/           # Componentes estructurales (Navbar, Footer)
└── hooks/                # Lógica abstraída (e.g. useTypingEffect)
public/                   # Activos estáticos optimizados