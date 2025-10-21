/**
 * Guitar type (affects neck aspect ratio and fret count)
 */
export type GuitarType = 'electric' | 'acoustic' | 'classical'

/**
 * Guitar type option for UI
 */
export interface GuitarTypeOption {
  value: GuitarType
  label: string
  description: string
  aspectRatio: number // width/height ratio for fretboard
  frets: number // number of frets (electric: 24, acoustic: 20, classical: 19)
}
