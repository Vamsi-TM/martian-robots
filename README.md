# Martian Robots (TypeScript)

This project implements the **Martian Robots** coding challenge.  
Robots move on a rectangular grid on Mars based on input instructions, and may be lost if they move off the grid — unless a "scent" prevents future robots from being lost in the same spot.

---

## Getting Started

### 1. Clone the repository
```bash
git clone git@github.com:Vamsi-TM/martian-robots.git
cd martian-robots

2. Install dependencies
npm install

3. Run tests
npm test

## Tests

- Written in **TypeScript** using **Jest**.

Covers:

- Sample input/output from the challenge
- Scent behavior to prevent repeated losses
- Edge detection at the grid borders
- Square paths returning to the start position

Test file: `tests/martian-robots.spec.ts`
