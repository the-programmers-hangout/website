var attr = "id"
const getTargetOffset = (hash) => {
  const id = window.decodeURI(hash.replace(`#`, ``))
  if (id !== ``) {
    const element = document.querySelector("[" + attr + "=" + id + "]")
    if (element) {
      return getElementTop(element)
    }
  }
  return null
}

function getElementTop(el) {
  let actualTop = el.offsetTop

  let current = el.offsetParent

  while (current !== null) {
    actualTop += current.offsetTop

    current = current.offsetParent
  }

  return actualTop
}

exports.onInitialClientRender = (_, pluginOptions) => {
  if (pluginOptions.offsetY) {
    attr = pluginOptions.attr
  }

  requestAnimationFrame(() => {
    const offset = getTargetOffset(window.location.hash)
    if (offset !== null) {
      window.scrollTo(0, offset)
    }
  })
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  const offset = getTargetOffset(location.hash)
  return offset !== null ? [0, offset] : true
}
