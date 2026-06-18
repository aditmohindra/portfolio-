import heroCompass from './hero-compass.txt?raw';

/** Hand-authored static ASCII / braille art — swap source files to update graphics. */
export const asciiArtAssets = {
  heroCompass: heroCompass.trimEnd(),
} as const;

export type AsciiArtAsset = keyof typeof asciiArtAssets;
