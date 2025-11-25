# YouTube StreamHub: A Modern YouTube-Style Platform

## 🚀 Overview

YouTube StreamHub is a **modern frontend web application** that replicates core features of a platform like YouTube, including dynamic video browsing, an optimized search experience, and a simulated real-time chat.

This project was built to practice real-world frontend architecture, focusing on **API integration, efficient state management, advanced UI/UX workflows**, and building a scalable component design using the latest React concepts and Hooks.

---

## ✨ Key Features

The application delivers a smooth, feature-rich user experience:

- **Live Search Suggestions:** Implements live search suggestions as the user types, mimicking YouTube's instant search capability.
  - Includes **Debouncing** and **Caching** logic for optimized API usage and reduced server load.
- **Dynamic Video Feed:** Displays a curated list of trending videos fetched directly via the **YouTube Data API v3**.
- **Search Caching using Redux Toolkit:** Previously searched queries load instantly from cache.
  This reduces API usage and makes the search bar feel fast and responsive.
- **Global State Management with Redux:** Stores search cache, chat messages, and UI states in a centralized store.
  Helps maintain a clean architecture and avoids prop drilling.
- **Routing with React Router:** Handles navigation between home, watch page, and dynamic video pages.
  Provides smooth, SPA-like transitions without page reloads.
- **Clean Component-Based Architecture:** Structured with reusable components like Header, Sidebar, VideoCard, and LiveChat.
  Helps maintain readability, scalability, and long-term maintainability.
- **Tailwind CSS for Modern UI:** Used for layout, responsiveness, spacing, and interactive effects.
  Helps in building a clean and minimal UI quickly.
- **Watch Page with Video Details:** Renders the video player, title, channel information, description, and key statistics using dynamic routing.
- **Real-Time Live Chat Simulation:** Generates random names and short chat messages in a buffer to mimic a dynamic live chat experience with smooth UI scrolling.
- **Responsive Sidebar & Header:** The navigation sidebar opens and closes based on a global UI state, ensuring responsiveness across different screen sizes.

---

## 🛠️ Tech Stack & Architecture

This project is built on a clean, scalable component architecture leveraging modern frontend tools.

| Category                | Technologies Used                                                                               |
| :---------------------- | :---------------------------------------------------------------------------------------------- |
| **Frontend Core**       | **React.js** (Functional Components & Hooks), **JavaScript ES6+**                               |
| **State Management**    | **Redux Toolkit** (Used for search cache, chat messages, and global UI state), **Custom Hooks** |
| **Styling & UI**        | **Tailwind CSS** (Utility-first styling, responsive layouts, transitions)                       |
| **Routing**             | **React Router** (Declarative routing for dynamic navigation)                                   |
| **Data & Optimization** | **YouTube Data API v3**, **Debouncing & API Optimization**                                      |
| **Architecture**        | Clean Component Architecture, Avoids Prop Drilling                                              |

---

## ⚙️ Setup and Installation

Follow these steps to get a local copy of the project running on your machine.

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- A valid **YouTube Data API v3 Key**

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/naveenmoka
    cd youtube-streamhub
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or yarn install
    ```

3.  **Configure API Key:**
    Create a file named `.env` in the root directory and add your YouTube API key:

    ```
    REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the Application:**
    ```bash
    npm start
    # or yarn start
    ```
    The application should open automatically in your browser at `http://localhost:3000`.
