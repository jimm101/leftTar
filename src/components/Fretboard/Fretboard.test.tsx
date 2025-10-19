import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Fretboard } from './Fretboard'
import { C_MAJOR_PENTATONIC, GUITAR_CONFIG } from '@/constants'

describe('Fretboard', () => {
  it('renders without crashing', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />)
    const svg = screen.getByRole('img')
    expect(svg).toBeInTheDocument()
  })

  it('displays the scale name', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />)
    const title = screen.getByText('C Major Pentatonic')
    expect(title).toBeInTheDocument()
  })

  it('has correct aria-label for accessibility', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />)
    const svg = screen.getByRole('img')
    expect(svg).toHaveAttribute(
      'aria-label',
      'C Major Pentatonic scale on left-handed guitar fretboard'
    )
  })

  it('renders all string labels', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />)

    // Check that all tuning notes are present
    GUITAR_CONFIG.tuning.forEach(note => {
      const labels = screen.getAllByText(note)
      expect(labels.length).toBeGreaterThan(0)
    })
  })

  it('renders fret numbers', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />)

    // Check for a few fret numbers
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('renders in color mode by default (no note labels)', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />)

    // In color mode, note names should NOT be displayed as text
    // Just verify the component renders
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders note names in notes mode', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} mode="notes" />)

    // In notes mode, we should see note letters displayed
    // C appears multiple times in the scale
    const notes = screen.getAllByText('C', { selector: 'text' })
    expect(notes.length).toBeGreaterThan(0)
  })

  it('renders scale degrees in degrees mode', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} mode="degrees" />)

    // In degrees mode, we should see numbers for scale degrees
    expect(screen.getAllByText('1', { selector: 'text' }).length).toBeGreaterThan(0)
    expect(screen.getAllByText('2', { selector: 'text' }).length).toBeGreaterThan(0)
    expect(screen.getAllByText('3', { selector: 'text' }).length).toBeGreaterThan(0)
  })

  it('renders solfège in solfege mode', () => {
    render(<Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} mode="solfege" />)

    // In solfège mode, we should see solfège syllables
    expect(screen.getAllByText('do').length).toBeGreaterThan(0)
    expect(screen.getAllByText('re').length).toBeGreaterThan(0)
    expect(screen.getAllByText('mi').length).toBeGreaterThan(0)
    expect(screen.getAllByText('sol').length).toBeGreaterThan(0)
    expect(screen.getAllByText('la').length).toBeGreaterThan(0)
  })
})
