# 🍎 MacBook Pro M4 Showcase

![Project Banner](public/title.png)

> An interactive, 3D-immersive Apple-style landing page for the MacBook Pro M4, built with Next.js, Three.js, and GSAP.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-Green?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Overview

This project is a high-fidelity clone of an Apple product landing page, specifically designed to showcase the **MacBook Pro M4**. It leverages the power of **React Three Fiber** for rendering interactive 3D models and **GSAP** for cinematic scroll-based animations.

The goal of this project is to demonstrate advanced frontend techniques, including 3D model optimization, complex state management with Zustand, and seamless animation orchestration.

## 🚀 Features

-   **Interactive 3D Viewer**: Rotate and explore the MacBook Pro in 3D space using `react-three-fiber`.
-   **Model Switching**: Seamlessly transition between 14-inch and 16-inch models with smooth GSAP animations.
-   **Scroll Animations**: Cinematic entrance and exit animations triggered by scroll position using `ScrollTrigger`.
-   **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices using Tailwind CSS.
-   **Performance Optimized**: Efficient loading of 3D assets and optimized rendering loops.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **3D Engine**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **Helpers**: [React Three Drei](https://github.com/pmndrs/drei) (PresentationControls, etc.)
-   **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Language**: TypeScript / JavaScript

## 📦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Srighnan-P/gsap_macbook.git
    cd gsap_macbook
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open the application**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
├── app/                # Next.js App Router pages and layouts
├── components/         # React components
│   ├── models/         # 3D Model components (JSX converted from GLTF)
│   ├── three/          # Three.js specific scenes and setups
│   └── ...             # UI components (Hero, NavBar, etc.)
├── public/             # Static assets (images, videos, 3D models)
├── store/              # Zustand state management
├── constants/          # Static data and configuration
└── ...
```

## 🎨 Key Components

-   **`ModelSwitcher.jsx`**: Handles the logic and animation for switching between different MacBook sizes in the 3D view.
-   **`Hero.jsx`**: The landing section with video backgrounds and introductory text.
-   **`ProductViewer.jsx`**: The main container for the 3D experience.




<div align="center">
  Made with ❤️ by Srighnan-P
</div>
