import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./components/**/*.{js,vue,ts}",
    "./modules/**/*.{js,vue,ts}",
  ],

  theme: {
    container: {
      center: true,
      padding: "20px",
    },

    plugins: [],
  },
};
