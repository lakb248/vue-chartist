<template>
    <div class="v-chartist-container"></div>
</template>

<script>
    import Chartist from 'chartist';
    const PIE = 'Pie';
    const LINE = 'Line';
    const BAR = 'Bar';
    export default {
        name: 'vue-chartist',
        props: {
            type: {
                type: String,
                validator(val) {
                    return val === PIE || val === LINE || val === BAR;
                },
                default() {
                    return LINE;
                }
            },
            data: {
                type: Object,
                required: true
            },
            options: {
                type: Object
            },
            listener: {
                type: Object
            },
            responsiveOptions: {
                type: Array
            }
        },
        data() {
            return {
                chartist: undefined
            };
        },
        methods: {
            updateEventListener(listener, type = 'on') {
                listener = listener || {};
                for (let event in listener) {
                    if (listener.hasOwnProperty(event)) {
                        this.chartist[type](event, listener[event]);
                    }
                }
            },
            renderChart() {
                let data = this.data;
                let options = this.options ? this.options : {};
                let responsiveOptions = this.responsiveOptions ? this.responsiveOptions : [];
                if (this.chartist) {
                    this.chartist.update(data, options, responsiveOptions);
                } else {
                    this.chartist = new Chartist[this.type](this.$el, data, options, responsiveOptions);
                    this.updateEventListener(this.listener, 'on');
                }
            }
        },
        watch: {
            data: {
                handler: 'renderChart',
                deep: true
            },
            options: {
                handler: 'renderChart',
                deep: true
            },
            responsiveOptions: {
                handler: 'renderChart',
                deep: true
            },
            listener(val, oldVal) {
                this.updateEventListener(oldVal, 'off');
                this.updateEventListener(val, 'on');
            }
        },
        mounted() {
            this.renderChart();
        },
        destroyed() {
            if (this.chartist) {
                this.chartist.detach();
            }
        }
    };
</script>
