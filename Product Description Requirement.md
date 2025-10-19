# Product Requirements Document - leftTar MVP

**Version:** 0.1
**Date:** October 19, 2025
**Status:** Prototype Phase

## Product Overview

leftTar is a web-based guitar fretboard visualization tool specifically designed for left-handed players. It provides an intuitive interface to visualize scales and chords across the fretboard from a left-handed perspective.

## Goals

- **Primary Goal**: Enable left-handed guitar players to quickly visualize scale patterns and chord shapes on a digital fretboard
- **Secondary Goal**: Provide an accessible, mobile-friendly reference tool for practice and learning
- **Technical Goal**: Establish a solid foundation for future expansion (additional scales, chords, and features)

## Target Audience

- Left-handed guitar players (beginner to advanced)
- Primary use case: Quick reference during practice sessions
- Primary device: Mobile phones (with desktop support)

## MVP Scope (Prototype v0.1)

### Core Features

1. **Fretboard Visualization**
   - Display 6-string guitar fretboard (standard tuning: E-A-D-G-B-E)
   - Left-handed orientation (low E string on the right, high E string on the left)
   - Show 12 frets minimum (covers one octave)
   - Visual fret markers at standard positions (3, 5, 7, 9, 12)

2. **Scale Display**
   - Display C Major Pentatonic scale as proof of concept
   - Show note positions across entire fretboard
   - Visual distinction between root notes and other scale tones

3. **Visualization Modes**
   - Mode selector with 4 options:
     1. Color Only - root notes (dark blue) and scale notes (light blue), no text
     2. Note Names - same colors, with note letters (C, D#, E, etc.) - prefer sharps
     3. Scale Degrees - same colors, with degree numbers (1, 2, 3, 5, 6, 7)
     4. Solfège - same colors, with solfège syllables (do, re, mi, sol, la, ti)

4. **User Interface**
   - Clean, minimal interface
   - Mobile-first responsive design
   - Clear visual hierarchy
   - Fast loading and rendering

### Out of Scope for MVP

- Multiple scale types (will add in future iterations)
- Chord visualization (future feature)
- Scale/chord selector (future feature)
- Audio playback
- Alternate tunings
- Theme customization (dark mode, custom colors)
- User accounts or data persistence
- Right-handed mode (not planned - this is specifically for lefties)

## Explicit Assumptions

### Musical Theory Assumptions

1. **Standard Tuning Only**: E-A-D-G-B-E (from lowest to highest pitch)
2. **12-Fret Display**: Showing 12 frets is sufficient for pattern visualization
3. **Fret Numbering**: Frets are numbered 1-12 (plus nut/open string as fret 0)
4. **String Numbering**: Strings numbered 1-6 (1 = high E, 6 = low E)

### Visual Design Assumptions

1. **Left-Handed Layout**:
   - Fretboard is horizontal
   - **Nut/headstock (fret 0) on the RIGHT side**
   - **Body of guitar on the LEFT side**
   - **Fret 1 toward the RIGHT, higher frets (12) toward the LEFT**
   - High E string (1st string, thinnest) at the TOP
   - Low E string (6th string, thickest) at the BOTTOM
   - This mirrors how a left-handed player sees their own guitar when looking down

2. **Note Display**:
   - Root notes: Larger circles, distinct color (primary/accent color)
   - Scale tones: Smaller circles, secondary color
   - Empty fret positions: Not highlighted
   - Fret markers: Small dots at frets 3, 5, 7, 9, and double dots at fret 12

3. **Colors** (Tailwind defaults for MVP):
   - Background: White/light gray
   - Fretboard: Dark gray/brown
   - Strings: Light gray
   - Frets: Medium gray
   - Root notes: Blue (primary)
   - Scale notes: Sky blue (lighter)
   - Text: Dark gray/black

### Technical Assumptions

1. **Platform**: Web application (no native mobile apps)
2. **Browser Support**: Modern browsers (Chrome, Safari, Firefox, Edge - latest 2 versions)
3. **No Backend**: Static site, all logic in frontend
4. **Deployment**: GitHub Pages for easy mobile testing
5. **Data Storage**: Hardcoded scale data in TypeScript constants
6. **SVG Rendering**: Use SVG for crisp display at all screen sizes
7. **Responsive Breakpoints**: Mobile-first, with tablet/desktop enhancements

### Scale Data Structure

For C Major Pentatonic (MVP):
- Notes: C, D, E, G, A
- Pattern: Root-2-3-5-6 (scale degrees)
- Positions: Hardcoded array of {string, fret, isRoot} objects

### User Interaction Assumptions

1. **Minimal Interaction**: Clicking/tapping to change visualization mode only
2. **Auto-Display**: Scale automatically displayed on page load in default mode
3. **Mode Persistence**: Selected visualization mode persists during session
4. **Single Page**: No navigation, single scale (C Major Pentatonic for MVP)

### Performance Assumptions

1. **Target Load Time**: < 2 seconds on 3G mobile
2. **Target Bundle Size**: < 200KB
3. **No Client-side Routing**: Single page app (no SPA framework needed)

## Success Criteria

### Functional Requirements

- [ ] Fretboard displays correctly on mobile (portrait orientation)
- [ ] Fretboard displays correctly on desktop
- [ ] Left-handed orientation is accurate
- [ ] C Major Pentatonic scale notes are positioned correctly
- [ ] Root notes are visually distinct from other scale tones
- [ ] Fret markers are visible and correctly positioned
- [ ] All strings and frets are clearly visible

### Technical Requirements

- [ ] TypeScript compiles without errors
- [ ] All unit tests pass
- [ ] Linting passes with no errors
- [ ] Production build succeeds
- [ ] Deployed to GitHub Pages successfully
- [ ] Site is accessible on mobile device

### Quality Requirements

- [ ] Code follows SOLID principles
- [ ] Components are properly typed
- [ ] Code coverage > 70% for core components
- [ ] No console errors or warnings
- [ ] Lighthouse score: Performance > 90, Accessibility > 90

## Data Model

### Types (TypeScript Interfaces)

```typescript
// Fret position on the guitar
interface FretPosition {
  string: number;    // 1-6 (1 = high E, 6 = low E)
  fret: number;      // 0-12 (0 = open string)
}

// Note with its role in the scale
interface ScaleNote extends FretPosition {
  note: string;      // Note name: 'C', 'D', 'E', 'G', 'A'
  isRoot: boolean;   // true if this is the root note
  degree?: number;   // Scale degree (1, 2, 3, 5, 6)
}

// Scale definition
interface Scale {
  name: string;           // "C Major Pentatonic"
  root: string;           // "C"
  notes: string[];        // ['C', 'D', 'E', 'G', 'A']
  positions: ScaleNote[]; // All positions on fretboard
}

// Guitar configuration
interface GuitarConfig {
  strings: number;        // 6
  frets: number;          // 12
  tuning: string[];       // ['E', 'A', 'D', 'G', 'B', 'E']
  isLeftHanded: boolean;  // true
}
```

## Future Considerations (Post-MVP)

1. **Scale Library**: Major, natural minor, harmonic minor, melodic minor, modes
2. **Chord Library**: Major, minor, 7ths, suspended, augmented, diminished
3. **Interactive Selection**: Dropdowns or buttons to choose scale/chord and root
4. **Pattern Highlighting**: Show specific positions or "boxes" for scales
5. **Educational Features**: Show note names, intervals, or scale degrees on the dots
6. **Practice Features**: Hide notes and quiz the user
7. **Audio Playback**: Play notes or entire scales
8. **Export Features**: Save/share fretboard diagrams
9. **Dark Mode**: Alternative color scheme
10. **Accessibility**: Screen reader support, keyboard navigation

## Open Questions & Decisions

### Resolved
- ✅ Display 12 or 15 frets? → **12 frets** (one octave, simpler for MVP)
- ✅ Show note names on dots? → **No** (cleaner visual, easier to implement)
- ✅ Vertical or horizontal fretboard? → **Horizontal** (more intuitive on mobile landscape, matches looking down at guitar)

### To Be Resolved Later
- How many fret markers to show (just dots, or also fret numbers)?
- Should fretboard width scale with screen size or stay fixed?
- What's the priority order for additional scales after MVP?

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 0.1 | 2025-10-19 | Initial PRD for MVP prototype |
