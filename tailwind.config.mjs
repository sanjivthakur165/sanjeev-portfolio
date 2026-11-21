/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pastel: {
          blush: '#FFF1F2',       // Rose 50
          rose: '#FFE4E6',        // Rose 100
          roseMed: '#FDA4AF',     // Rose 300
          roseDeep: '#F43F5E',    // Rose 500
          peach: '#FFEDD5',       // Orange 100
          peachMed: '#FB923C',    // Orange 400
          coral: '#F87171',       // Red 400
          lavender: '#F3E8FF',    // Purple 100
          lavenderMed: '#C084FC', // Purple 400
          cream: '#FDFBF7',       // Warm Ivory
          warmWhite: '#FAFAF9',   // Stone 50
          dark: '#18181B',        // Zinc 900 (Deep Charcoal for crisp editorial contrast)
          muted: '#52525B',       // Zinc 600
        },
        night: {
          midnight: '#071026',    // Deep South Florida oceanic midnight navy (GTA 6 reference)
          ocean: '#11214A',       // Elevated oceanic glass card surface
          electric: '#0C4A85',    // Electric coastal water deep blue
          cyan: '#00E5FF',        // Bioluminescent wave turquoise (GTA 6 reference)
          magenta: '#FF2E93',     // Ocean Drive neon palm magenta
          pink: '#FF5EA7',        // Radiant neon pink
          coral: '#FF7B47',       // Beach bonfire & sunset coral
          amber: '#FFB03A',       // Boardwalk party golden glow
          lavender: '#A78BFA',    // Vice City twilight violet sky
          light: '#FFFFFF',       // Luminous pure white for headings (crisp & unmistakable)
          muted: '#DCE4F7',       // Silky high-legibility ocean silver for content (smooth on eyes)
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(135deg, #FFF1F2 0%, #FFEDD5 50%, #F3E8FF 100%)',
        'sunset-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 241, 242, 0.6) 100%)',
        'vice-accent': 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
        'night-gradient': 'linear-gradient(135deg, #080B24 0%, #101A3D 50%, #174C91 100%)',
        'night-card': 'linear-gradient(135deg, rgba(16, 26, 61, 0.85) 0%, rgba(8, 11, 36, 0.95) 100%)',
        'neon-accent': 'linear-gradient(90deg, #35D9E8 0%, #E83EAA 50%, #FF5CA8 100%)',
      }
    },
  },
  plugins: [],
};
