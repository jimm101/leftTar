/**
 * Represents a position on the guitar fretboard
 */
export interface FretPosition {
  string: number // 1-6 (1 = high E, 6 = low E)
  fret: number // 0-12 (0 = open string)
}

/**
 * Represents a note with its role in a scale
 */
export interface ScaleNote extends FretPosition {
  note: string // Note name: 'C', 'D', 'E', etc.
  isRoot: boolean // true if this is the root note
  degree?: number // Scale degree (1, 2, 3, 5, 6)
}

/**
 * Defines a musical scale
 */
export interface Scale {
  name: string // "C Major Pentatonic"
  root: string // "C"
  notes: string[] // ['C', 'D', 'E', 'G', 'A']
  positions: ScaleNote[] // All positions on fretboard
}

/**
 * Configuration for the guitar visualization
 */
export interface GuitarConfig {
  strings: number // 6
  frets: number // 12
  tuning: string[] // ['E', 'A', 'D', 'G', 'B', 'E']
  isLeftHanded: boolean // true
}
