export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

function getTheme(): string {
  if (localStorage.getItem('selected-theme') == null) {
    localStorage.setItem('selected-theme', ThemeType.LIGHT);
    return ThemeType.LIGHT;
  }
  return localStorage.getItem('selected-theme') as string;
}

function setTheme(theme: ThemeType): string {
  document.body.toggleAttribute('dark-theme', ThemeType.DARK === theme);
  localStorage.setItem('selected-theme', theme);
  return theme;
}

function toggleTheme() : string {
  return setTheme(getTheme() === 'light' ? ThemeType.DARK : ThemeType.LIGHT);
}

function applyTheme() : string {
  document.body.toggleAttribute('dark-theme', ThemeType.DARK === getTheme());
  return getTheme();
}

type ThemeChangerType = {
  readonly apply: () => string;
  readonly theme: () => string;
  readonly setTheme: (theme: ThemeType) => string;
  readonly toggleTheme: () => string;
};

const ThemeChanger: ThemeChangerType = {
  apply: applyTheme,
  theme: () => getTheme(),
  setTheme: setTheme,
  toggleTheme: toggleTheme,
};

export default ThemeChanger;
