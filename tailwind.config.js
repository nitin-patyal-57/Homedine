/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "on-primary-fixed-variant": "#334c40",
              "surface-container-high": "#eae7e7",
              "on-tertiary-fixed-variant": "#753413",
              "background": "#fcf9f8",
              "tertiary-fixed-dim": "#ffb596",
              "on-surface": "#1c1b1b",
              "on-secondary-fixed": "#022100",
              "on-secondary": "#ffffff",
              "on-tertiary-container": "#f2976e",
              "on-secondary-fixed-variant": "#28501e",
              "inverse-primary": "#b1cdbd",
              "on-tertiary-fixed": "#360f00",
              "inverse-on-surface": "#f3f0ef",
              "on-secondary-container": "#436d37",
              "surface-container": "#f0eded",
              "primary-container": "#2e473b",
              "secondary": "#3f6833",
              "surface-variant": "#e5e2e1",
              "tertiary": "#501b00",
              "surface-container-highest": "#e5e2e1",
              "on-surface-variant": "#424844",
              "primary-fixed": "#cce9d9",
              "on-primary-fixed": "#062016",
              "surface-tint": "#4a6457",
              "surface-container-lowest": "#ffffff",
              "primary-fixed-dim": "#b1cdbd",
              "outline-variant": "#c2c8c2",
              "surface-dim": "#dcd9d9",
              "surface": "#fcf9f8",
              "on-background": "#1c1b1b",
              "surface-bright": "#fcf9f8",
              "inverse-surface": "#313030",
              "tertiary-container": "#6e2f0e",
              "on-primary-container": "#99b5a5",
              "on-primary": "#ffffff",
              "error-container": "#ffdad6",
              "secondary-fixed-dim": "#a4d393",
              "outline": "#727974",
              "error": "#ba1a1a",
              "on-error-container": "#93000a",
              "surface-container-low": "#f6f3f2",
              "on-tertiary": "#ffffff",
              "secondary-fixed": "#c0f0ad",
              "secondary-container": "#bdedaa",
              "on-error": "#ffffff",
              "tertiary-fixed": "#ffdbcd",
              "primary": "#183126"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "unit": "8px",
              "margin-desktop": "64px",
              "margin-mobile": "20px",
              "gutter": "24px",
              "container-max": "1280px"
          },
          "fontFamily": {
              "body-md": ["Inter", "sans-serif"],
              "label-md": ["Inter", "sans-serif"],
              "headline-lg": ["Playfair Display", "serif"],
              "headline-md": ["Playfair Display", "serif"],
              "headline-lg-mobile": ["Playfair Display", "serif"],
              "button": ["Inter", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "display-lg": ["Playfair Display", "serif"]
          },
          "fontSize": {
              "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
              "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
              "headline-lg": ["40px", { "lineHeight": "1.2", "fontWeight": "600" }],
              "headline-md": ["28px", { "lineHeight": "1.3", "fontWeight": "500" }],
              "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
              "button": ["15px", { "lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500" }],
              "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
              "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }]
          }
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
