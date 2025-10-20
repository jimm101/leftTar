import type { Scale, ScaleNote, Key, ScaleType } from '@/types'
import { GUITAR_CONFIG } from '@/constants'

/**
 * Chromatic scale (all 12 notes, using sharps)
 */
const CHROMATIC = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

/**
 * Scale formulas in semitone intervals
 */
const SCALE_FORMULAS: Record<ScaleType, number[]> = {
  major: [2, 2, 1, 2, 2, 2, 1], // W-W-H-W-W-W-H
  'harmonic-minor': [2, 1, 2, 2, 1, 3, 1], // W-H-W-W-H-W+H-H
  'melodic-minor': [2, 1, 2, 2, 2, 2, 1], // W-H-W-W-W-W-H
  dorian: [2, 1, 2, 2, 2, 1, 2], // W-H-W-W-W-H-W
  'major-pentatonic': [2, 2, 3, 2, 3], // W-W-m3-W-m3
  'minor-pentatonic': [3, 2, 2, 3, 2], // m3-W-W-m3-W
}

/**
 * Scale names
 */
const SCALE_NAMES: Record<ScaleType, string> = {
  major: 'Major',
  'harmonic-minor': 'Harmonic Minor',
  'melodic-minor': 'Melodic Minor',
  dorian: 'Dorian',
  'major-pentatonic': 'Major Pentatonic',
  'minor-pentatonic': 'Minor Pentatonic',
}

/**
 * Get note at given number of semitones above root
 */
function getNoteFromInterval(root: Key, semitones: number): string {
  const rootIndex = CHROMATIC.indexOf(root)
  const noteIndex = (rootIndex + semitones) % 12
  return CHROMATIC[noteIndex]
}

/**
 * Generate notes for a scale given root and formula
 */
function generateScaleNotes(root: Key, formula: number[]): string[] {
  const notes: string[] = [root]
  let currentSemitone = 0

  for (const interval of formula.slice(0, -1)) {
    // slice(0, -1) to exclude the octave interval
    currentSemitone += interval
    notes.push(getNoteFromInterval(root, currentSemitone))
  }

  return notes
}

/**
 * Find all positions of a note on the fretboard
 */
function findNotePositions(note: string, maxFret: number = 12): Array<{ string: number; fret: number }> {
  const positions: Array<{ string: number; fret: number }> = []
  const tuning = GUITAR_CONFIG.tuning // ['E', 'A', 'D', 'G', 'B', 'E']

  for (let stringNum = 1; stringNum <= 6; stringNum++) {
    const openNote = tuning[6 - stringNum] // Convert string number to tuning index
    const openNoteIndex = CHROMATIC.indexOf(openNote)

    // Find all occurrences of the note on this string
    for (let fret = 0; fret <= maxFret; fret++) {
      const fretNoteIndex = (openNoteIndex + fret) % 12
      if (CHROMATIC[fretNoteIndex] === note) {
        positions.push({ string: stringNum, fret })
      }
    }
  }

  return positions
}

/**
 * Generate a complete scale with all fretboard positions
 */
export function generateScale(root: Key, scaleType: ScaleType): Scale {
  const formula = SCALE_FORMULAS[scaleType]
  const notes = generateScaleNotes(root, formula)
  const positions: ScaleNote[] = []

  // For each note in the scale, find all its positions on the fretboard
  notes.forEach((note, index) => {
    const notePositions = findNotePositions(note)
    const isRoot = index === 0
    const degree = index + 1

    notePositions.forEach(pos => {
      positions.push({
        string: pos.string,
        fret: pos.fret,
        note,
        isRoot,
        degree,
      })
    })
  })

  return {
    name: `${root} ${SCALE_NAMES[scaleType]}`,
    root,
    notes,
    positions,
  }
}
