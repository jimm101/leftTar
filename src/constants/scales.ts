import type { Scale } from '@/types'

/**
 * C Major Pentatonic Scale
 * Notes: C (root), D, E, G, A
 * Pattern: 1-2-3-5-6 (whole, whole, minor third, whole, minor third)
 *
 * All positions mapped across the fretboard in standard tuning
 */
export const C_MAJOR_PENTATONIC: Scale = {
  name: 'C Major Pentatonic',
  root: 'C',
  notes: ['C', 'D', 'E', 'G', 'A'],
  positions: [
    // String 6 (Low E)
    { string: 6, fret: 0, note: 'E', isRoot: false, degree: 3 },
    { string: 6, fret: 3, note: 'G', isRoot: false, degree: 5 },
    { string: 6, fret: 5, note: 'A', isRoot: false, degree: 6 },
    { string: 6, fret: 8, note: 'C', isRoot: true, degree: 1 },
    { string: 6, fret: 10, note: 'D', isRoot: false, degree: 2 },
    { string: 6, fret: 12, note: 'E', isRoot: false, degree: 3 },

    // String 5 (A)
    { string: 5, fret: 0, note: 'A', isRoot: false, degree: 6 },
    { string: 5, fret: 3, note: 'C', isRoot: true, degree: 1 },
    { string: 5, fret: 5, note: 'D', isRoot: false, degree: 2 },
    { string: 5, fret: 7, note: 'E', isRoot: false, degree: 3 },
    { string: 5, fret: 10, note: 'G', isRoot: false, degree: 5 },
    { string: 5, fret: 12, note: 'A', isRoot: false, degree: 6 },

    // String 4 (D)
    { string: 4, fret: 0, note: 'D', isRoot: false, degree: 2 },
    { string: 4, fret: 2, note: 'E', isRoot: false, degree: 3 },
    { string: 4, fret: 5, note: 'G', isRoot: false, degree: 5 },
    { string: 4, fret: 7, note: 'A', isRoot: false, degree: 6 },
    { string: 4, fret: 10, note: 'C', isRoot: true, degree: 1 },
    { string: 4, fret: 12, note: 'D', isRoot: false, degree: 2 },

    // String 3 (G)
    { string: 3, fret: 0, note: 'G', isRoot: false, degree: 5 },
    { string: 3, fret: 2, note: 'A', isRoot: false, degree: 6 },
    { string: 3, fret: 5, note: 'C', isRoot: true, degree: 1 },
    { string: 3, fret: 7, note: 'D', isRoot: false, degree: 2 },
    { string: 3, fret: 9, note: 'E', isRoot: false, degree: 3 },
    { string: 3, fret: 12, note: 'G', isRoot: false, degree: 5 },

    // String 2 (B)
    { string: 2, fret: 1, note: 'C', isRoot: true, degree: 1 },
    { string: 2, fret: 3, note: 'D', isRoot: false, degree: 2 },
    { string: 2, fret: 5, note: 'E', isRoot: false, degree: 3 },
    { string: 2, fret: 8, note: 'G', isRoot: false, degree: 5 },
    { string: 2, fret: 10, note: 'A', isRoot: false, degree: 6 },

    // String 1 (High E)
    { string: 1, fret: 0, note: 'E', isRoot: false, degree: 3 },
    { string: 1, fret: 3, note: 'G', isRoot: false, degree: 5 },
    { string: 1, fret: 5, note: 'A', isRoot: false, degree: 6 },
    { string: 1, fret: 8, note: 'C', isRoot: true, degree: 1 },
    { string: 1, fret: 10, note: 'D', isRoot: false, degree: 2 },
    { string: 1, fret: 12, note: 'E', isRoot: false, degree: 3 },
  ],
}
