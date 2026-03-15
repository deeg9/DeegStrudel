# Strudel Basic Concepts Study Guide

## What is Strudel?

Strudel is a live coding music programming environment that allows you to create rhythmic patterns and sound sequences using code. It's designed for real-time music creation and performance, making it accessible to both programmers and musicians.

## Core Components

### 1. Sound Function
The fundamental building block for playing audio samples:
```javascript
sound("bd")        // Play a bass drum
sound("bd sd hh")  // Play sequence: bass drum, snare drum, hi-hat
```

### 2. Mini-Notation Syntax
Strudel uses a unique "Mini-Notation" system for creating musical patterns:

#### Basic Sequencing
- **Space** separates sequential sounds: `sound("bd sd hh")`
- **Commas (`,`)** play sounds in parallel: `sound("bd, hh")`
- **Dashes (`-`) or tildes (`~`)** represent rests/silence

#### Pattern Control
- **Angle brackets `< >`** cycle through options: `sound("<bd sd hh>")`
- **Square brackets `[ ]`** create sub-sequences: `sound("bd [hh rim]")`
- **Asterisk (`*`)** multiplies speed/repetition: `sound("bd*4")`

#### Advanced Patterns
```javascript
// Example combinations
sound("bd [hh rim], cp")     // Parallel + sub-sequence
sound("<bd hh rim>*8")       // Cycle with speed multiplication
sound("bd sd - hh")          // Sequence with rest
```

### 3. Tempo Control
- **`setcpm()`** sets cycles per minute (default is 30)
```javascript
setcpm(60)  // Set to 60 cycles per minute for faster tempo
```

### 4. Sound Selection and Banks
- **Sample selection** using colon (`:`) or `n()` function:
```javascript
sound("bd:2")          // Select bass drum sample #2
sound("bd").n("0 1 2") // Cycle through samples 0, 1, 2
```

- **Sound banks** for different drum machine styles:
```javascript
sound("bd sd hh").bank("RolandTR808")  // Use TR-808 sounds
```

## Key Learning Principles

1. **Pattern-Based Thinking**: Strudel encourages thinking in musical cycles and patterns
2. **Live Coding**: Changes can be made in real-time while music is playing
3. **Layering**: Multiple sound patterns can run simultaneously
4. **Flexibility**: Patterns can be modified, combined, and evolved dynamically

## Basic Workflow

1. Start with simple sound sequences
2. Experiment with different mini-notation patterns
3. Layer multiple patterns using parallel playback
4. Adjust tempo and sound selection
5. Build complexity gradually through pattern manipulation

## Common Sound Types
- `bd` - Bass drum
- `sd` - Snare drum  
- `hh` - Hi-hat
- `oh` - Open hi-hat
- `cp` - Clap
- `rim` - Rimshot

This foundation provides the essential concepts needed to start creating music with Strudel's powerful pattern-based approach to live coding.