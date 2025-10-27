# 💰 Crypto Tracker

A simple and elegant cryptocurrency tracker built with React Native and Expo. Track real-time prices, trends, and market data for various cryptocurrencies.

![Status](https://img.shields.io/badge/status-updated-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Security](#-security)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- Real-time cryptocurrency price tracking
- Clean and intuitive user interface
- Loading states and error handling
- Built with Expo for cross-platform support
- Redux for state management

## 🛠 Tech Stack

- **Framework:** Expo SDK 51
- **React:** 18.2.0
- **React Native:** 0.74.5
- **State Management:** Redux 5.0.1, React-Redux 9.1.2
- **HTTP Client:** Axios 1.7.7
- **Middleware:** Redux Thunk 3.1.0, Redux Promise 0.6.0, Redux Logger 3.0.6
- **Build Tool:** Babel with Expo preset

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your iOS/Android device (optional)

## 🚀 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/aficat/crypto-tracker.git
cd crypto-tracker
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

## 📱 Usage

### Running on iOS Simulator

```bash
npm run ios
```

### Running on Android Emulator

```bash
npm run android
```

### Running on Web

```bash
npm run web
```

### Running on Physical Device

1. Start the development server with `npm start`
2. Scan the QR code with Expo Go app (iOS) or Camera app (Android)

## 📁 Project Structure

```
crypto-tracker/
├── App.js                          # Main application entry point
├── src/
│   ├── Actions/
│   │   └── FetchCoinData.js       # API calls and async actions
│   ├── components/
│   │   ├── CoinCard.js            # Individual coin card component
│   │   ├── CryptoContainer.js     # Main container component
│   │   ├── Header.js              # App header component
│   │   └── index.js               # Component exports
│   ├── Reducers/
│   │   ├── CryptoReducer.js       # Cryptocurrency state management
│   │   └── index.js               # Reducer exports
│   ├── Store.js                   # Redux store configuration
│   └── Utils/
│       ├── ActionTypes.js         # Action type constants
│       ├── CoinIcons.js           # Coin icon mappings
│       └── Constants.js           # API configuration
├── assets/
│   ├── icon.png                   # App icon
│   └── splash.png                 # Splash screen
└── package.json
```

## 🔒 Security

This project has been recently updated to address all critical and high-severity security vulnerabilities:

- ✅ Updated Expo SDK from 36 to 51 to fix OAuth vulnerability
- ✅ Updated Axios from 0.19.2 to 1.7.7 to resolve multiple vulnerabilities:
  - DoS attack vulnerabilities
  - Inefficient Regular Expression Complexity
  - Cross-Site Request Forgery (CSRF)
  - Server-Side Request Forgery (SSRF)
- ✅ Updated all dependencies to latest compatible versions
- ✅ Fixed axios API implementation to follow best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Afiqah Rashid**

- GitHub: [@aficat](https://github.com/aficat)
- Project: [crypto-tracker](https://github.com/aficat/crypto-tracker)

## 🙏 Acknowledgments

- Inspired by a tutorial by [Bryan Ellis on Udemy](https://www.udemy.com/share/101uXOAEMZdF5XQX4G/)
- Built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev/)

---

⭐ If you find this project helpful, consider giving it a star!
