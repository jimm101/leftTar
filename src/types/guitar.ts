/**
 * Guitar type (affects neck aspect ratio)
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
}
