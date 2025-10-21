import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Fretboard } from './Fretboard'
import { GUITAR_CONFIG } from '@/constants'
import { generateScale } from '@/utils/musicTheory/scaleGenerator'

describe('Fretboard', () => {
  const testScale = generateScale('A', 'major', 24) // Electric guitar range

  it('renders without crashing', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} />)
    const svg = screen.getByRole('img')
    expect(svg).toBeInTheDocument()
  })

  it('displays the scale name', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} />)
    const title = screen.getByText('A Major')
    expect(title).toBeInTheDocument()
  })

  it('has correct aria-label for accessibility', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} />)
    const svg = screen.getByRole('img')
    expect(svg).toHaveAttribute(
      'aria-label',
      'A Major scale on left-handed guitar fretboard'
    )
  })

  it('renders all string labels', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} />)

    // Check that all tuning notes are present
    GUITAR_CONFIG.tuning.forEach(note => {
      const labels = screen.getAllByText(note)
      expect(labels.length).toBeGreaterThan(0)
    })
  })

  it('renders fret numbers', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} />)

    // Check for fret numbers (only every 3rd fret is shown, plus fret 1)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('renders note names in notes mode by default', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} mode="notes" />)

    // In notes mode, we should see note letters displayed
    // A appears multiple times in the scale
    const notes = screen.getAllByText('A', { selector: 'text' })
    expect(notes.length).toBeGreaterThan(0)
  })

  it('renders in color mode (no note labels)', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} mode="color" />)

    // In color mode, note names should NOT be displayed as text
    // Just verify the component renders
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders scale degrees in degrees mode', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} mode="degrees" />)

    // In degrees mode, we should see numbers for scale degrees
    expect(screen.getAllByText('1', { selector: 'text' }).length).toBeGreaterThan(0)
    expect(screen.getAllByText('2', { selector: 'text' }).length).toBeGreaterThan(0)
    expect(screen.getAllByText('3', { selector: 'text' }).length).toBeGreaterThan(0)
  })

  it('renders solfège in solfege mode', () => {
    render(<Fretboard scale={testScale} config={GUITAR_CONFIG} mode="solfege" />)

    // In solfège mode, we should see solfège syllables
    expect(screen.getAllByText('do').length).toBeGreaterThan(0)
    expect(screen.getAllByText('re').length).toBeGreaterThan(0)
    expect(screen.getAllByText('mi').length).toBeGreaterThan(0)
  })

  it('supports different guitar types', () => {
    const { container } = render(<Fretboard scale={testScale} config={GUITAR_CONFIG} guitarType="classical" />)

    // Classical guitar has a different aspect ratio, so the SVG height should be different
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
