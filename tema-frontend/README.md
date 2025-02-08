# Tema Frontend

This is the repository for the **Tema Frontend**, a Vue.js-based project with Tailwind CSS integration for building modern, responsive web applications.

---

## 🚀 **Getting Started**

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) (v7+)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Canh-Nguyen-94/TEMA.git
   ```
2. Navigate into the project directory:
   ```bash
   cd tema-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

The app will be accessible at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📂 **Project Structure**

```plaintext
tema-frontend/
├── .vscode/          # VSCode workspace settings (optional)
├── configs/          # Configuration files
├── dist/             # Production build output
├── node_modules/     # Dependencies
├── public/           # Static assets
├── src/              # Source code
│   ├── assets/       # Images, fonts, and other static assets
│   ├── common/       # Reusable components
│   ├── components/   # Core components
│   ├── config/       # Application configuration
│   ├── directives/   # Vue directives
│   ├── layouts/      # Page layouts (e.g., `home-layout`)
│   ├── lib/          # Utility libraries
│   ├── plugins/      # Vue plugins
│   ├── router/       # Vue Router configuration
│   ├── utils/        # Utility functions
│   ├── views/        # Page views (e.g., `home`)
│   ├── App.vue       # Root component
│   ├── index.css     # Tailwind CSS styles
│   ├── main.js       # App entry point
├── .gitignore        # Git ignore rules
├── components.json   # Component metadata
├── index.html        # HTML template
├── jsconfig.json     # JavaScript configuration
├── package.json      # NPM configuration
├── postcss.config.mjs # PostCSS configuration
├── README.md         # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
```

---

## 🛠️ **Scripts**

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.

---

## 🎨 **Technologies Used**

- **Vue 3**: JavaScript framework for building user interfaces.
- **Shadcn Vue**: UI library for building user interfaces with vue https://www.shadcn-vue.com/.
- **Tailwind CSS**: Utility-first CSS framework.
- **PostCSS**: Tool for transforming CSS with plugins.
- **Vue Router**: Routing library for Vue.js applications.
- **Lucide Icons**: Icon library used in the project.

---

## 🔧 **Configuration Files**

- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`postcss.config.mjs`**: PostCSS plugins and settings.
- **`jsconfig.json`**: JavaScript project settings for better editor integration.
