import Prism from "prismjs"

import type { Grammar } from "prismjs"

function supportsLookBehind() {
    try {
        const lookbehindRegexp = new RegExp("(?<==)(.*)");

        return lookbehindRegexp.test("=hello");
    } catch(e) {
        return false;
    }
}

function configurePrismJS() {
    const config: Grammar = {
        property: {
            pattern: /(.*.)(?==)/,
        },
        operator: {
            pattern: /=/
        }
    }

    if (supportsLookBehind()) {
        /* eslint-disable-next-line id-blacklist */
        config.string = {
            pattern: new RegExp("(?<==)(.*.)", "g"),
            global: true,
        }  
    }

    Prism.languages.env = config;
}

configurePrismJS();
