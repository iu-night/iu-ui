import { defineComponent } from 'vue'
export const IuNode = defineComponent({
  props: {
    content: {
      type: Object,
    },
  },
  render(): any {
    return this.content
  },
})
