/**
 * Scale types available in the application
 */
export type ScaleType =
  | 'major'
  | 'harmonic-minor'
  | 'melodic-minor'
  | 'dorian'
  | 'major-pentatonic'
  | 'minor-pentatonic'

/**
 * Musical keys (note names)
 */
export type Key = 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#'

/**
 * Scale type option for UI
 */
export interface ScaleTypeOption {
  value: ScaleType
  label: string
  description: string
}

/**
 * Key option for UI
 */
export interface KeyOption {
  value: Key
  label: string
}
