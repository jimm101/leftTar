import type { GuitarTypeOption } from '@/types'

/**
 * Available guitar types with their aspect ratios
 * Aspect ratio = width / height (higher = wider fretboard)
 */
export const GUITAR_TYPES: GuitarTypeOption[] = [
  {
    value: 'electric',
    label: 'Electric Guitar',
    description: 'Standard electric guitar neck',
    aspectRatio: 2.5, // Narrower neck, standard reference
  },
  {
    value: 'acoustic',
    label: 'Acoustic Guitar',
    description: 'Typical acoustic guitar neck',
    aspectRatio: 2.3, // Slightly wider than electric
  },
  {
    value: 'classical',
    label: 'Classical Guitar',
    description: 'Classical/nylon string guitar neck',
    aspectRatio: 2.0, // Wider neck
  },
]
