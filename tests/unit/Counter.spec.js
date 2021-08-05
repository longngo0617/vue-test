import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe('Counter', () => {
  test('initial state is zero', () => {
    //Arrange
    const wrapper = mount(Counter)
    //Assert
    expect(wrapper.html()).toContain(0)
  })

  test('increment counter by 1 with no props', async () => {
    //Arrange 
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    //Act
    await button.trigger('click')
    //Assert
    expect(wrapper.html()).toContain(1)
  })

  test('increment counter by prop value', async () => {
    const wrapper = mount(Counter,{props:{by:5}})
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.html()).toContain(5)
  })
})