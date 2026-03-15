// Basic House Beat in Strudel
// Based on classic 4/4 house music patterns

// Set tempo to typical house music BPM (around 120-128 BPM)
// In Strudel, this translates to cycles per minute
setcpm(120)

// Main kick drum pattern - classic four-on-the-floor
sound("bd bd bd bd")

// Add hi-hats on the off-beats for groove
sound("- hh - hh")

// Snare/clap on beats 2 and 4 (classic house backbeat)
sound("- cp - cp")

// Open hi-hat for variation (every 4th beat)
sound("- - - oh")

// Alternative: Combined pattern approach
// sound("bd cp bd cp, - hh - hh, - - - oh")

// For more variation, you can use:
// sound("bd cp bd cp").bank("RolandTR808")
// sound("hh*8").gain(0.6)  // Quieter hi-hats playing 8th notes