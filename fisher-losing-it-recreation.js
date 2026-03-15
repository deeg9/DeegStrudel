// Fisher - "Losing It" Strudel Recreation
// Based on research: 125 BPM, D Major, Tech House style
// Key elements: 4-on-the-floor kicks, constant hi-hats, claps on beats 2 & 4

// Set tempo to match Fisher's "Losing It" - 125 BPM
setcpm(125)

// Main 4-on-the-floor kick pattern (core of tech house)
sound("bd bd bd bd").gain(0.8)

// Constant hi-hats throughout (classic EDM sample with high-end boost)
// Using 8th note pattern to maintain energy
sound("hh*8").gain(0.4).hpf(6000)

// Claps on beats 2 & 4 (classic house backbeat)
sound("- cp - cp").gain(0.6)

// Additional percussion layer for tech house groove
sound("- - rim -").gain(0.3)

// Alternative combined pattern (uncomment to use instead):
// sound("bd bd bd bd, hh*8, - cp - cp, - - rim -")
//   .gain("0.8 0.4 0.6 0.3")
//   .hpf("0 6000 0 0")

// For build-up sections (Fisher uses 8th note kicks in buildups):
// sound("bd*8").gain(0.8)

// Filtered intro version (like Fisher's filtered start):
// sound("bd bd bd bd").lpf(800).gain(0.8)
// sound("hh*8").lpf(1200).gain(0.2)

// Notes:
// - Fisher's track is minimalist - rhythm and percussion are the main elements
// - The hi-hats are cut during buildups in the original
// - Main lead pattern repeats every 4 bars with automation variations
// - Track uses simple but effective groove that drives the energy