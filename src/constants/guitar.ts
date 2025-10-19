import type { GuitarConfig } from '@/types'

/**
 * Standard left-handed guitar configuration
 * - 6 strings in standard tuning (E-A-D-G-B-E from low to high)
 * - 12 frets (covers one octave)
 * - Left-handed orientation
 */
export const GUITAR_CONFIG: GuitarConfig = {
  strings: 6,
  frets: 12,
  tuning: ['E', 'A', 'D', 'G', 'B', 'E'], // Low to high (string 6 to string 1)
  isLeftHanded: true,
}

/**
 * Fret marker positions (standard guitar inlays)
 */
export const FRET_MARKERS = [3, 5, 7, 9, 12]

/**
 * String numbers for reference
 * 1 = high E (thinnest)
 * 6 = low E (thickest)
 */
export const STRING_NUMBERS = {
  HIGH_E: 1,
  B: 2,
  G: 3,
  D: 4,
  A: 5,
  LOW_E: 6,
}
