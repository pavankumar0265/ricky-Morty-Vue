import { describe ,it, expect } from 'vitest'
import Search from "../Search.vue"
import {mount} from '@vue/test-utils'
import { useStore } from "vuex";

describe('Search', () => {
    const wrapper = mount(Search)
    const store = useStore();
    it('should render correctly', () => {
        const wrapper = mount(Search)
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('should check search correctly', () => {
        expect(wrapper.html()).toContain("Search")
    })
})