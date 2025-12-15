# App Weather

A small, responsive weather app built with React and Vite. It lets users view current weather for cities, add cities to their local list, and navigate through a simple multi-page interface.

## Features

- View current weather for selected cities (OpenWeatherMap API)
- Add cities to your saved list (persisted using `localStorage`)
- Responsive layout with a mobile hamburger menu
- Simple login view and help/contact pages
- Built with React, React Router, and CSS Modules

## Tech Stack

- Vite
- React
- React Router
- CSS Modules
- React Icons

## Installation

1. Clone the repository:

```bash
git clone https://github.com/EmanuelEvangelista/repo-app-weather.git
cd app-weather
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

6. Lint the code:

```bash
npm run lint
```

## OpenWeatherMap API

This project uses the OpenWeatherMap API to fetch current weather data. A demo API key is included in `src/context/WeatherContext.jsx` for convenience, but for production use you should obtain your own API key from https://openweathermap.org/ and replace the value there.

For a more secure setup, move the API key into an environment variable and use Vite's env convention. Create a `.env` file with:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Then access it in code via `import.meta.env.VITE_OPENWEATHER_API_KEY`.

## Project Structure

- `src/` - Main source code
  - `components/` - UI components (Navbar, WeatherCard, Footer, etc.)
  - `context/` - React contexts (`WeatherContext`, `alertContext`)
  - `pages/` - Route pages (Weather, FindCity, Login, Help)
  - `hooks/` - Custom hooks
  - `layouts/` - App layout components

## Usage

- Open the app in a browser at the address printed by `npm run dev` (usually `http://localhost:5173`).
- Use the "Add City" route to search for and add a city.
- Saved cities are stored in `localStorage` and appear in the app's city list.

## Contributing

Contributions are welcome! Open an issue to discuss major changes, then submit a pull request with a clear description of your changes.

## License

Add a license (e.g., MIT) before publishing.

---