import Prism from "prismjs"

if (supportsLookBehind()) {
    Prism.languages.env = {
        property: {
            pattern: /(.*.)(?==)/,
        },
        string: {
            pattern: /(?<==)(.*.)/g,
            global: true,
        },
        operator: {
            pattern: /=/
        }
    }   
} else {
    Prism.languages.env = {
        property: {
            pattern: /(.*.)(?==)/,
        },
        operator: {
            pattern: /=/
        }
    }
}


function supportsLookBehind() {
    try {
        return /(?<==)(.*)/.test("=hello")
    } catch(e) {
        return false;
    }
}