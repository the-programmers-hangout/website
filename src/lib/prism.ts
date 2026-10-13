import Prism, { type Grammar } from "prismjs"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-c"
import "prismjs/components/prism-clojure"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-elixir"
import "prismjs/components/prism-graphql"
import "prismjs/components/prism-haskell"
import "prismjs/components/prism-java"
import "prismjs/components/prism-kotlin"
import "prismjs/components/prism-markup-templating"
import "prismjs/components/prism-php"
import "prismjs/components/prism-python"
import "prismjs/components/prism-yaml"

function supportsLookBehind() {
  try {
    const lookbehindRegexp = new RegExp("(?<==)(.*)")

    return lookbehindRegexp.test("=hello")
  } catch (e) {
    return false
  }
}

function configurePrismJS() {
  const config: Grammar = {
    property: {
      pattern: /(.*.)(?==)/,
    },
    operator: {
      pattern: /=/,
    },
  }

  if (supportsLookBehind()) {
    /* eslint-disable-next-line id-blacklist */
    config.string = {
      pattern: new RegExp("(?<==)(.*.)", "g"),
      global: true,
    }
  }

  Prism.languages.env = config
}

configurePrismJS()

export { Prism }
