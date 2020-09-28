/* eslint-disable no-unused-vars */
enum Theme {
  light = 'Light',
  dark = 'Dark'
}

enum Pattern {
  signal = 'Signal',
  charlieBrown = 'Charlie Brown',
  formalInvitation = 'Formal Invitation',
  plus = 'Plus',
  circuitBoard = 'Circuit Board',
  overlappingHexagons = 'Overlapping Hexagons',
  brickWall = 'Brick Wall',
  floatingCogs = 'Floating Cogs',
  diagonalStripes = 'Diagonal Stripes'
}

enum FileType {
  png = 'PNG',
  jpg = 'JPG'
}

enum Font {
  inter = 'Inter',
  bitter = 'Bitter',
  raleway = 'Raleway',
  rokkitt = 'Rokkitt',
  sourceCodePro = 'Source Code Pro',
  koho = 'KoHo'
}

type Configuration = {
  name: string
  logo: string

  font: Font
  theme: Theme
  pattern: Pattern
  fileType: FileType

  // Optional Param
  owner?: { state: boolean; value: string }
  description?: { state: boolean; value: string }
  language?: { state: boolean; value: string }
  stargazers?: { state: boolean; value: number }
  forks?: { state: boolean; value: number }
  issues?: { state: boolean; value: number }
  pulls?: { state: boolean; value: number }
}

export default Configuration

export { Theme, Pattern, Font, FileType }
