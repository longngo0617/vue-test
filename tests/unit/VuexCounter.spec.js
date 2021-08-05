import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import VuexCounter from "@/components/VuexCounter";

describe("VuexCounter", () => {
  const initCounter = 200;
  let mockedIncFn;
  let store;

  beforeEach(() => {
    mockedIncFn = jest.fn();
    store = createStore({
      state: { count: initCounter },
      mutations: {
        INC: mockedIncFn,
      },
    });
  });

  test("uses vuex counter state", async () => {
    const wrapper = mount(VuexCounter, {
      global: { plugins: [store] },
    });
    expect(wrapper.html()).toContain(initCounter);
  });

  test("calls INC mutation function", async () => {
    const wrapper = mount(VuexCounter, {
      global: { plugins: [store] },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(mockedIncFn).toHaveBeenCalled();
  });
});
