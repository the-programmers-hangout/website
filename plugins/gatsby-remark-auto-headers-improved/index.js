const visit = require(`unist-util-visit`)
const slugs = require(`github-slugger`)()

function toString(node) {
  return (
    valueOf(node) ||
    (node.children && node.children.map(toString).join("")) ||
    ""
  )
}
function valueOf(node) {
  return (
    (node && node.value ? node.value : node.alt ? node.alt : node.title) || ""
  )
}

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value
  }
  return context[key]
}

function stripLeadingNumber(value) {
  return value.replace(/^(\d*\-)(.*)/, "$2")
}

const svgIcon = `<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`

module.exports = (
  { markdownAST },
  { icon = svgIcon, attr = "id", className = "anchor", maintainCase = false }
) => {
  slugs.reset()
  visit(markdownAST, `heading`, (node) => {
    const id = slugs.slug(toString(node), maintainCase)
    const strippedId = stripLeadingNumber(id)
    const data = patch(node, `data`, {})

    patch(data, attr, strippedId)
    patch(data, `htmlAttributes`, {})
    patch(data, `hProperties`, {})
    patch(data.htmlAttributes, attr, strippedId)
    patch(data.hProperties, attr, strippedId)

    if (icon !== false) {
      node.children.unshift({
        type: `link`,
        url: `#${strippedId}`,
        title: null,
        data: {
          hProperties: {
            "aria-hidden": true,
            class: className,
          },
          hChildren: [
            {
              type: `raw`,
              // The Octicon link icon is the default. But users can set their own icon via the "icon" option.
              value: icon,
            },
          ],
        },
      })
    }
  })

  return markdownAST
}
