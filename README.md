# RiskRate AI 

**Real-Time Health Insurance Cost Estimator**

[![Deploy with Vercel](https://vercel.com/button)](https://health-costs-regression-model.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Machine Learning](https://img.shields.io/badge/Machine%20Learning-Regression-FF6F00?style=for-the-badge)](./train_simple_model.py)
[![UX/UI](https://img.shields.io/badge/UX%2FUI-Premium-06B6D4?style=for-the-badge)](./risk-rate-ai/src/index.css)

> **"Stop waiting for quotes. Get your health insurance estimate in 30 milliseconds, not 30 minutes."**

**[🔴 Live Demo: RiskRate AI](https://health-costs-regression-model.vercel.app/)**

RiskRate AI is a modern, high-performance dashboard that provides instant health insurance premium estimates. By bridging the gap between Data Science and Frontend Engineering, this project transforms a standard Python regression model into a responsive, interactive web application.

---

## The Concept

Traditional insurance quotes require lengthy forms and backend processing. RiskRate AI flips the script:
- **Zero Latency**: The Machine Learning model is embedded directly into the frontend.
- **Interactive UX**: Prices update instantly as users drag sliders or toggle switches.
- **Visual Feedback**: Dynamic color-coding for BMI risk levels and smooth number animations.

## Tech Stack

- **Frontend**: React 18 (via Vite) for high-performance rendering.
- **Styling**: Custom CSS Design System (No frameworks like Bootstrap/Tailwind).
  - *Why?* To demonstrate mastery of CSS variables, flexbox/grid layouts, and responsive design without relying on pre-built components.
- **Machine Learning**: Linear Regression (trained on the Medical Cost Personal Datasets).
- **Architecture**: "Edge AI" approach—weights extracted from Python and hardcoded into the client-side logic for O(1) inference time.

## The "Secret Weapon" (Model Logic)

Instead of a heavy backend API, I reverse-engineered the regression model to run purely in the browser.

**The Equation:**
```math
Cost = w_{age} \cdot Age + w_{bmi} \cdot BMI + w_{children} \cdot Children + w_{smoker} \cdot Smoker + b
```

**The Weights (Derived from Python):**
- **Base Bias ($b$)**: `-12,105.48`
- **Smoker Penalty**: `+$23,810.32` (The dominant factor)
- **Age Factor**: `+$257.83` / year
- **BMI Factor**: `+$321.94` / unit
- **Children**: `+$473.69` / child

## Features

### 1. Split-Screen Layout
A clean, modern interface separating inputs (Left) from results (Right), optimized for both desktop and mobile.

### 2. Smart Inputs
- **Age Slider**: Restricts input to insurable ages (18-65).
- **BMI Visualizer**: The slider track changes color (Blue → Green → Yellow → Red) to visually indicate health risk categories (Underweight to Obese).
- **iOS-Style Toggles**: Premium feel for binary choices like "Smoker".

### 3. Instant Feedback
The "Estimated Annual Premium" card isn't just static text. It features a custom `AnimatedNumber` component that interpolates values smoothly, giving the app a "living" feel.

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/natinew77-creator/RiskRate-AI.git
   cd RiskRate-AI/risk-rate-ai
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Locally**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the app.

## Author

**Natneal B.**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/natneal-belete)
---
*Disclaimer: This application is for educational purposes. The estimates are based on a public dataset and do not constitute real financial advice.*
