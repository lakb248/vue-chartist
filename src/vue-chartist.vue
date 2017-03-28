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
            renderChart() {
                let data = JSON.parse(JSON.stringify(this.data));
                let options = this.options ? JSON.parse(JSON.stringify(this.options)) : {};
                let responsiveOptions = this.responsiveOptions ? JSON.parse(JSON.stringify(this.responsiveOptions)) : [];
                if (this.chartist) {
                    this.chartist.update(data, options, responsiveOptions);
                } else {
                    this.chartist = new Chartist[this.type](this.$el, data, options, responsiveOptions);
                    if (this.listener) {
                        Object.keys(this.listener).forEach(key => {
                            this.chartist.on(key, this.listener[key]);
                        });
                    }
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.renderChart();
            });
            this.$watch('data', () => {
                this.renderChart();
            }, {deep: true});
            this.$watch('options', () => {
                this.renderChart();
            }, {deep: true});
            this.$watch('responsiveOptions', () => {
                this.renderChart();
            }, {deep: true});
        },
        destroyed() {
            if (this.chartist) {
                this.chartist.detach();
            }
        }
    };
</script>

<style lang="sass"></style>
