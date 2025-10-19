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
})
