import { WindowLocation } from "@reach/router"
import React, { FC, Fragment } from "react"
import * as SC from "./styles"

import { FileConnection } from "../../../generated/graphql"

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
function levenshteinDistance(term1: string, term2: string) {
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

interface IFourZeroFourHint {
  basepath: string
  location: WindowLocation
  data: { allFile: FileConnection }
  threshold?: number
}

export const FourZeroFourHint: FC<IFourZeroFourHint> = ({
  basepath,
  location,
  data,
  threshold = 8,
}) => {
  // the data prop has the graphql result
  // we're abstracting it to `linkArray` to just have array of edges matched
  // must use `.node.absolutePath` on each edge to get each node's absolute link
  // we will compare this link
  // however, the relative links are more user friendly
  const linkArray = data.allFile.edges

  // location prop has several attributes
  // location.origin is base url
  // location.href is the window location
  // location.pathname is link after protocol and hostname
  // by replacing `"/resources/"`,
  // we are left with only the relative path to `resources`
  const search = location.pathname.replace(`/${basepath}`, "")

  // filter based on distance
  // levenshtein distance of x means how 'off' it was
  const displayArray = linkArray.filter((value) => {
    return (
      levenshteinDistance(
        search.toLowerCase(),
        value.node!.relativePath!.toLowerCase()
      ) < threshold
    )
  })

  // helpful message if no matches found
  const found = displayArray.length === 0 && "Oops, nothing similar found."

  return (
    <Fragment>
      <SC.StyledDiv>
        <h3>Based off of &quot;{search}&quot; you may have meant:</h3>
        {found}
      </SC.StyledDiv>
      <ul>
        {displayArray.map((value, index) => {
          return (
            <li key={index}>
              <SC.StyledLink to={`${basepath}${value.node.relativePath}`}>
                {value.node.relativePath}
              </SC.StyledLink>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}
