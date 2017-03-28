import Vue from 'vue';
import vueChartist from './src/vue-chartist.vue';

new Vue({
    el: '#container',
    components: {
        'vue-chartist': vueChartist
    },
    data() {
        return {
            type: 'Bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            },
            options: {
                fullWidth: true,
                chartPadding: {
                    right: 40
                }
            },
            listener: {
                data(e) {
                    console.log(e);
                }
            }
        };
    },
    methods: {
        updateData() {
            this.data.series.push([100, 30, 44, 52, 61]);
        },
        updateOptions() {
            this.options.chartPadding.right = 10;
        }
    }
});
