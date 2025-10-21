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
 * Fret marker positions (standard guitar inlays for extended range)
 * Single dots at these positions, double dots at 12 and 24
 */
export const FRET_MARKERS = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]

/**
 * Double dot positions (octave markers)
 */
export const DOUBLE_DOT_FRETS = [12, 24]

/**
 * Position boundaries (vertical bars indicating playing positions I-V)
 * Each position boundary is placed at the fret where a new position starts
 */
export const POSITION_MARKERS = [
  { position: 'I', startFret: 1 },
  { position: 'II', startFret: 5 },
  { position: 'III', startFret: 8 },
  { position: 'IV', startFret: 11 },
  { position: 'V', startFret: 14 },
]

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

/**
 * String thicknesses (stroke widths in pixels)
 * Varied to represent realistic guitar string gauges
 */
export const STRING_THICKNESSES = {
  1: 0.8, // High E (thinnest)
  2: 1.2, // B
  3: 1.6, // G
  4: 2.0, // D
  5: 2.5, // A
  6: 3.0, // Low E (thickest)
}
