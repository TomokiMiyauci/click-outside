import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import { clickOutside } from '../src/directives/click-outside'

const fn = jest.fn()
const comp = defineComponent({
  template: `<div data-test="outer">
    <div v-click-outside="fn">root
      <span data-test="inner">inner</span>
    </div>
  </div>

`,
  directives: {
    clickOutside
  },
  setup() {
    return {
      fn
    }
  }
})

describe('clickOutside', () => {
  it('should not call yet', async () => {
    const wrapper = mount(comp)

    await wrapper.trigger('click')
    expect(fn).not.toHaveBeenCalled()
    await wrapper.find('[data-test="inner"]').trigger('click')
    expect(fn).not.toHaveBeenCalled()
  })
})
