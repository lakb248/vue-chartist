/* global describe, it, expect */
import Vue from 'vue';
import vueChartist from '../src/vue-chartist.vue';

describe('vue-chartist.vue', () => {
    it('should have correct text', () => {
        expect(vueChartist.data().text).toBe('Hello vueChartist');
    });

    it('should render correct text', () => {
        const vm = new Vue({
            template: '<div><vue-chartist></vue-chartist></div>',
            components: {
                'vue-chartist': vueChartist
            }
        }).$mount();
        expect(vm.$el.querySelector('h2').textContent)
            .toBe('Hello vueChartist');
    });
});
