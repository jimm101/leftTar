import type { ScaleTypeOption, KeyOption } from '@/types'

/**
 * Available scale types
 */
export const SCALE_TYPES: ScaleTypeOption[] = [
  {
    value: 'major',
    label: 'Major',
    description: 'Major scale (Ionian mode)',
  },
  {
    value: 'harmonic-minor',
    label: 'Harmonic Minor',
    description: 'Minor scale with raised 7th',
  },
  {
    value: 'melodic-minor',
    label: 'Melodic Minor',
    description: 'Minor scale with raised 6th and 7th',
  },
  {
    value: 'dorian',
    label: 'Dorian',
    description: 'Dorian mode (minor with raised 6th)',
  },
  {
    value: 'major-pentatonic',
    label: 'Major Pentatonic',
    description: '5-note major scale',
  },
  {
    value: 'minor-pentatonic',
    label: 'Minor Pentatonic',
    description: '5-note minor scale',
  },
]

/**
 * Available keys
 */
export const KEYS: KeyOption[] = [
  { value: 'A', label: 'A' },
  { value: 'A#', label: 'A# / Bb' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'C#', label: 'C# / Db' },
  { value: 'D', label: 'D' },
  { value: 'D#', label: 'D# / Eb' },
  { value: 'E', label: 'E' },
  { value: 'F', label: 'F' },
  { value: 'F#', label: 'F# / Gb' },
  { value: 'G', label: 'G' },
  { value: 'G#', label: 'G# / Ab' },
]
