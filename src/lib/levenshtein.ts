// helper function to make matrix generation easier
// credits to https://stackoverflow.com/a/13808461
function makeMatrix(w: number, h: number, val: any = null) {
  return Array(h)
    .fill(null)
    .map(() => Array(w).fill(val))
}

// calculate semantic difference
// based on one character edits
// efficient refactoring inspired by MIT licensed repo:
// https://github.com/trekhleb/javascript-algorithms
export function levenshteinDistance(term1: string, term2: string) {
  /* base case: empty strings */
  if (term1.length === 0) {
    return term2.length
  }
  if (term2.length === 0) {
    return term1.length
  }

  // this will be our comparison matrix
  const matrix = makeMatrix(term1.length + 1, term2.length + 1, null)

  // make zeroeth row based off first term
  for (let i = 0; i <= term1.length; i += 1) {
    matrix[0][i] = i
  }

  // make zeroeth column based off second term
  for (let j = 0; j <= term2.length; j += 1) {
    matrix[j][0] = j
  }

  // iterative with full matrix implementation
  // https://en.wikipedia.org/wiki/Levenshtein_distance
  for (let j = 1; j <= term2.length; j += 1) {
    for (let i = 1; i <= term1.length; i += 1) {
      const substitutionCost = term1[i - 1] === term2[j - 1] ? 0 : 1

      matrix[j][i] = Math.min(
        matrix[j - 1][i] + 1, // deletion
        matrix[j][i - 1] + 1, // insertion
        matrix[j - 1][i - 1] + substitutionCost
      ) // substitution
    }
  }

  return matrix[term2.length][term1.length]
}
