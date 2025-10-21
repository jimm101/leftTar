import type { GuitarTypeOption } from '@/types'

/**
 * Available guitar types with their aspect ratios and fret counts
 * Aspect ratio = width / height (higher = narrower/taller fretboard for more frets)
 * Aspect ratios adjusted for 50% tighter spacing and extended fret ranges
 */
export const GUITAR_TYPES: GuitarTypeOption[] = [
  {
    value: 'electric',
    label: 'Electric Guitar',
    description: 'Standard electric guitar neck (24 frets)',
    aspectRatio: 3.5, // Adjusted for compact spacing + 24 frets
    frets: 24,
  },
  {
    value: 'acoustic',
    label: 'Acoustic Guitar',
    description: 'Typical acoustic guitar neck (20 frets)',
    aspectRatio: 3.2, // Adjusted for compact spacing + 20 frets
    frets: 20,
  },
  {
    value: 'classical',
    label: 'Classical Guitar',
    description: 'Classical/nylon string guitar neck (19 frets)',
    aspectRatio: 2.8, // Adjusted for compact spacing + 19 frets
    frets: 19,
  },
]
