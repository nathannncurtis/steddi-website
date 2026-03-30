// Carefully traced freeway and surface street corridors in the SGV/IE area.
// Each route follows the actual road geometry as closely as possible
// using ~15-25 points per route for smooth rendering.

// THE CHOSEN ROUTE: I-10 East — DTLA to West Covina/Pomona corridor
// This is the one that "wins" — clean, direct, intentional
export const MAIN_ROUTE = [
  [-118.2550, 34.0420], // DTLA near Union Station
  [-118.2330, 34.0290], // East LA interchange area
  [-118.2220, 34.0325], // I-10/I-5 split
  [-118.2000, 34.0500], // Alhambra
  [-118.1700, 34.0630], // San Gabriel
  [-118.1510, 34.0683], // Rosemead
  [-118.1370, 34.0716], // El Monte
  [-118.1100, 34.0715], // Baldwin Park approach
  [-118.0820, 34.0722], // Baldwin Park / I-605
  [-118.0500, 34.0715], // West Covina
  [-118.0200, 34.0650], // Covina
  [-117.9750, 34.0686], // San Dimas
  [-117.9400, 34.0722], // La Verne
  [-117.9100, 34.0723], // Pomona
  [-117.8700, 34.0717], // Claremont
]

// CHAOS ROUTES: Real alternatives a nav app would suggest

// I-210 Foothill Freeway — the northern bypass
export const I210 = [
  [-118.2600, 34.1300], // Pasadena start
  [-118.2200, 34.1380], // East Pasadena
  [-118.1800, 34.1450], // Arcadia
  [-118.1500, 34.1510], // Monrovia
  [-118.1200, 34.1500], // Duarte
  [-118.0900, 34.1500], // Irwindale
  [-118.0550, 34.1486], // Azusa
  [-118.0200, 34.1400], // Glendora
  [-117.9600, 34.1355], // San Dimas
  [-117.9200, 34.1300], // La Verne
  [-117.8700, 34.1180], // Claremont/Upland
]

// CA-60 Pomona Freeway — the southern route
export const CA60 = [
  [-118.1900, 34.0200], // Monterey Park
  [-118.1500, 34.0350], // Montebello
  [-118.1200, 34.0334], // South El Monte
  [-118.0900, 34.0370], // Industry
  [-118.0600, 34.0410], // Rowland Heights area
  [-118.0300, 34.0350], // Diamond Bar approach
  [-117.9800, 34.0200], // Diamond Bar
  [-117.9350, 33.9978], // Phillips Ranch
  [-117.8800, 33.9950], // Chino Hills edge
]

// I-605 North-South connector
export const I605 = [
  [-118.0850, 33.9630], // Whittier area
  [-118.0840, 33.9900], // Pico Rivera
  [-118.0830, 34.0200], // South El Monte
  [-118.0820, 34.0500], // Baldwin Park
  [-118.0810, 34.0722], // I-10 junction
  [-118.0800, 34.1000], // Irwindale
  [-118.0790, 34.1300], // Duarte
  [-118.0780, 34.1486], // I-210 junction
]

// Valley Blvd — a surface street parallel to I-10
export const VALLEY_BLVD = [
  [-118.2300, 34.0640], // Alhambra
  [-118.2000, 34.0620], // San Gabriel
  [-118.1700, 34.0605], // Rosemead
  [-118.1400, 34.0590], // El Monte
  [-118.1100, 34.0575], // Baldwin Park
  [-118.0800, 34.0560], // West Covina
  [-118.0500, 34.0545], // Covina
  [-118.0200, 34.0530], // Azusa Ave area
  [-117.9900, 34.0510], // Glendora
]

// Garvey Ave — another surface street alternative
export const GARVEY_AVE = [
  [-118.2400, 34.0500], // East LA
  [-118.2100, 34.0490], // Alhambra
  [-118.1800, 34.0480], // San Gabriel
  [-118.1500, 34.0470], // Rosemead
  [-118.1200, 34.0460], // El Monte
  [-118.0900, 34.0450], // Baldwin Park
  [-118.0600, 34.0440], // West Covina
  [-118.0300, 34.0430], // Covina
]

// A wandering surface route — someone who took side streets to avoid the 10
export const SIDE_STREETS_1 = [
  [-118.2400, 34.0600], // Start in Alhambra
  [-118.2200, 34.0700], // Up through San Gabriel
  [-118.2000, 34.0750], // North to Arcadia border
  [-118.1800, 34.0650], // Back down through Temple City
  [-118.1600, 34.0600], // Through Rosemead
  [-118.1400, 34.0700], // Up again
  [-118.1200, 34.0650], // Down through El Monte
  [-118.1000, 34.0600], // Baldwin Park area
  [-118.0800, 34.0650], // Up slightly
  [-118.0600, 34.0600], // West Covina
]

// Another wandering route — someone who tried the 60 then bailed to surface
export const SIDE_STREETS_2 = [
  [-118.1800, 34.0250], // Start on 60 area
  [-118.1600, 34.0350], // Exit to surface
  [-118.1400, 34.0450], // Heading north
  [-118.1200, 34.0500], // Cross to Valley Blvd
  [-118.1000, 34.0550], // Continue east
  [-118.0800, 34.0600], // Zigzag
  [-118.0600, 34.0500], // Drop south
  [-118.0400, 34.0550], // Back up
  [-118.0200, 34.0500], // Continue east
  [-118.0000, 34.0550], // More zigzag
  [-117.9800, 34.0500], // Almost there
]
