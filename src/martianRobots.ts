export type Direction = 'N' | 'E' | 'S' | 'W'

export interface Position {
  x: number
  y: number
  dir: Direction
}

export class Mars {
  private maxX: number
  private maxY: number
  private scents: Set<string> = new Set()

  constructor(maxX: number, maxY: number) {
    this.maxX = maxX
    this.maxY = maxY
  }

  private turnLeft(dir: Direction): Direction {
    const order: Direction[] = ['N', 'W', 'S', 'E']
    return order[(order.indexOf(dir) + 1) % 4]
  }

  private turnRight(dir: Direction): Direction {
    const order: Direction[] = ['N', 'E', 'S', 'W']
    return order[(order.indexOf(dir) + 1) % 4]
  }

  private moveForward(pos: Position): Position {
    const moves: Record<Direction, [number, number]> = {
      N: [0, 1],
      E: [1, 0],
      S: [0, -1],
      W: [-1, 0],
    }
    const [dx, dy] = moves[pos.dir]
    return { ...pos, x: pos.x + dx, y: pos.y + dy }
  }

  runRobot(start: Position, instructions: string): string {
    let pos: Position = { ...start }
    let lost = false

    for (const cmd of instructions) {
      if (cmd === 'L') pos.dir = this.turnLeft(pos.dir)
      else if (cmd === 'R') pos.dir = this.turnRight(pos.dir)
      else if (cmd === 'F') {
        const next = this.moveForward(pos)
        const scentKey = `${pos.x},${pos.y},${pos.dir}`

        const offGrid =
          next.x < 0 || next.y < 0 || next.x > this.maxX || next.y > this.maxY

        if (offGrid) {
          // If no scent at this edge, this robot is lost and leaves a scent
          if (!this.scents.has(scentKey)) {
            this.scents.add(scentKey)
            lost = true
            break
          }
          // If scented, ignore the move and continue
        } else {
          pos = next
        }
      }
    }

    return `${pos.x} ${pos.y} ${pos.dir}${lost ? ' LOST' : ''}`
  }
}
