export const theme = {
  light: {
    background: '#ffffff',
    foreground: '#171717',
    primary: '#0070f3',
    secondary: '#666666',
    accent: '#fafafa',
  },
  dark: {
    background: '#0a0a0a',
    foreground: '#ededed',
    primary: '#3291ff',
    secondary: '#888888',
    accent: '#111111',
  },
} as const;

export type Theme = typeof theme; 