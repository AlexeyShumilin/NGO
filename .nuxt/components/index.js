export { default as About } from '../../components/About.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Test } from '../../components/Test.vue'
export { default as NavigationLogo } from '../../components/navigation/Logo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
