/**
 * Solfège syllables mapped to scale degrees (1-indexed)
 */
const SOLFEGE_MAP: Record<number, string> = {
  1: 'do',
  2: 're',
  3: 'mi',
  4: 'fa',
  5: 'sol',
  6: 'la',
  7: 'ti',
}

/**
 * Get the solfège syllable for a scale degree
 */
export function getSolfege(degree: number): string {
  return SOLFEGE_MAP[degree] || ''
}

/**
 * Get the note name for display (already provided in scale data)
 * This function is here for consistency and future enhancements
 */
export function getNoteName(note: string): string {
  // Notes are already in the preferred format from scale data
  // Bias toward sharps is handled in the scale data definition
  return note
}
