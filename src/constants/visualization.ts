import type { VisualizationModeOption } from '@/types'

/**
 * Available visualization modes with labels and descriptions
 */
export const VISUALIZATION_MODES: VisualizationModeOption[] = [
  {
    value: 'color',
    label: 'Color Only',
    description: 'Show notes with colors only (no labels)',
  },
  {
    value: 'notes',
    label: 'Note Names',
    description: 'Show note letters (C, D#, E, etc.)',
  },
  {
    value: 'degrees',
    label: 'Scale Degrees',
    description: 'Show scale degree numbers (1-7)',
  },
  {
    value: 'solfege',
    label: 'Solfège',
    description: 'Show solfège syllables (do, re, mi, etc.)',
  },
]
