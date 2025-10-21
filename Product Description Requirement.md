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
   - **Fret range by guitar type:**
     - Electric: Nut through fret 24
     - Acoustic: Nut through fret 20
     - Classical: Nut through fret 19
   - **String spacing and thickness:**
     - Strings spaced 50% tighter than average guitar proportions
     - String thickness varies realistically from low E (thickest) to high E (thinnest)
   - **Fret spacing:**
     - Fret spacing 50% tighter than average guitar proportions
     - Fret numbers positioned just to the right of each fret line
   - **Position markers:**
     - Vertical bars indicating positions 1-5 (groups of 4-5 frets each)
   - **Traditional fret markers:**
     - Dots at frets 3, 5, 7, 9, 12, 15, 17, 19, 21, 24
     - Double dots at frets 12 and 24
   - **Guitar body:**
     - Body shape rendered at fret 13
     - Left-handed cutaway over high strings (strings 1-3)
     - Body extends to the left (toward higher frets)

2. **Scale Selection**
   - Key selector dropdown (defaults to A)
   - Scale/mode type selector dropdown with 6 options:
     1. Major
     2. Harmonic Minor
     3. Melodic Minor
     4. Dorian
     5. Major Pentatonic
     6. Minor Pentatonic
   - Show note positions across entire fretboard
   - Visual distinction between root notes and other scale tones

3. **Visualization Mode Dropdown**
   - Single dropdown (defaults to Note Names) with 4 options:
     1. Color Only - root notes (dark blue) and scale notes (light blue), no text
     2. Note Names - same colors, with note letters (C, D#, E, etc.) - prefer sharps
     3. Scale Degrees - same colors, with degree numbers (1-7)
     4. Solfège - same colors, with solfège syllables (do, re, mi, sol, la, ti)

4. **Guitar Type Selector**
   - Dropdown to select guitar type (affects neck aspect ratio):
     1. Electric Guitar - standard electric proportions
     2. Acoustic Guitar - typical acoustic proportions
     3. Classical Guitar - classical/nylon string proportions

5. **User Interface**
   - Clean, minimal interface
   - Mobile-first responsive design
   - Clear visual hierarchy
   - Fast loading and rendering

### Out of Scope for v0.4

- Additional scale types beyond the 6 specified
- Chord visualization (future feature)
- Keys beyond the 12 chromatic notes
- Audio playback
- Alternate tunings
- Theme customization (dark mode, custom colors)
- User accounts or data persistence
- Right-handed mode (not planned - this is specifically for lefties)
- Animated or interactive body/neck

## Explicit Assumptions

### Musical Theory Assumptions

1. **Standard Tuning Only**: E-A-D-G-B-E (from lowest to highest pitch)
2. **Extended Fret Display**:
   - Electric: 24 frets (full professional range)
   - Acoustic: 20 frets (typical acoustic limit)
   - Classical: 19 frets (traditional classical range)
3. **Fret Numbering**: Frets numbered from 0 (nut) through 24/20/19 depending on guitar type
4. **String Numbering**: Strings numbered 1-6 (1 = high E, 6 = low E)
5. **Position Markers**: 5 positions, each spanning approximately 4-5 frets
   - Position I: Frets 1-4
   - Position II: Frets 5-7
   - Position III: Frets 8-10
   - Position IV: Frets 11-13
   - Position V: Frets 14-17

### Visual Design Assumptions

1. **Left-Handed Layout**:
   - Fretboard is horizontal
   - **Nut/headstock (fret 0) on the RIGHT side**
   - **Body of guitar on the LEFT side**
   - **Fret 1 toward the RIGHT, higher frets (12) toward the LEFT**
   - High E string (1st string, thinnest) at the TOP
   - Low E string (6th string, thickest) at the BOTTOM
   - This mirrors how a left-handed player sees their own guitar when looking down

2. **Dimensional Specifications**:
   - **String Spacing**: 50% tighter than average guitar (more compact visualization)
   - **Fret Spacing**: 50% tighter than average guitar proportions
   - **String Thickness** (stroke width, pixels):
     - String 1 (high E): 0.8px (thinnest)
     - String 2 (B): 1.2px
     - String 3 (G): 1.6px
     - String 4 (D): 2.0px
     - String 5 (A): 2.5px
     - String 6 (low E): 3.0px (thickest)
   - **Aspect Ratios** (adjusted for tighter spacing):
     - Electric: 3.5 (was 2.5)
     - Acoustic: 3.2 (was 2.3)
     - Classical: 2.8 (was 2.0)

3. **Labeling and Markers**:
   - **Fret Numbers**: Positioned just to the right of each fret line (not centered between frets)
   - **Position Markers**: Vertical bars spanning full string height at boundaries of positions I-V
   - **Traditional Fret Dots**: Small circular markers at frets 3, 5, 7, 9, 12, 15, 17, 19, 21, 24
     - Single dot for most positions
     - Double dots at frets 12 and 24

4. **Note Display**:
   - Root notes: Larger circles (14px radius), distinct color (primary/accent color)
   - Scale tones: Smaller circles (10px radius), secondary color
   - Empty fret positions: Not highlighted

5. **Guitar Body Rendering**:
   - **Body Position**: Aligned with fret 13 (where neck meets body)
   - **Left-Handed Cutaway**: Upper horn cutaway over high strings (strings 1-3)
   - **Body Shape**: Extends leftward (toward higher frets) from fret 13
   - **Visual Style**: Outline only, semi-transparent or subtle color to not obscure fretboard

6. **Colors** (Tailwind defaults):
   - Background: White/light gray
   - Fretboard: Dark brown (#8B4513 saddle brown)
   - Strings: Light gray with varied opacity based on thickness
   - Frets: Medium gray (#666)
   - Nut: Thick dark line (#333, 4px)
   - Position markers: Subtle vertical lines (#999, dashed)
   - Fret dots: Light gray (#CCC), semi-transparent
   - Root notes: Blue (#3B82F6)
   - Scale notes: Sky blue (#93C5FD)
   - Guitar body: Warm wood tone (#D2691E chocolate), subtle
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

For all scales in key of A:
- **Scale Formulas**: Defined as interval patterns (semitone steps)
  - Major: W-W-H-W-W-W-H (2-2-1-2-2-2-1)
  - Harmonic Minor: W-H-W-W-H-W+H-H (2-1-2-2-1-3-1)
  - Melodic Minor: W-H-W-W-W-W-H (2-1-2-2-2-2-1)
  - Dorian: W-H-W-W-W-H-W (2-1-2-2-2-1-2)
  - Major Pentatonic: W-W-m3-W-m3 (2-2-3-2-3)
  - Minor Pentatonic: m3-W-W-m3-W (3-2-2-3-2)
- **Note Names**: Computed from root + formula, prefer sharps
- **Positions**: Generated array of {string, fret, note, isRoot, degree} objects

### User Interaction Assumptions

1. **Dropdown Selectors**: Users can select key, scale type, visualization mode, and guitar type
2. **Auto-Display**: Scale automatically displayed on page load with defaults:
   - Key: A
   - Scale: Major
   - Visualization: Note Names
   - Guitar Type: Electric
3. **Session Persistence**: All selections persist during session
4. **Single Page**: No navigation, instant updates on selection change

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
