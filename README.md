# v-chartist
> A component of [Chartist](https://gionkunz.github.io/chartist-js) implements by vuejs 2.0

## Installation
```
npm install v-chartist --save
```
or
```
bower install vue-chartist --save
```

## Usage
``` javascript
import VueChartist from 'v-chartist';

new Vue({
    components: {
        'vue-chartist': VueChartist
    },
    template: '<vue-chartist :data="data" :options="options" type="Line"></vue-chartist>',
    data: function () {
        return {
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
            }
        };
    }
});
```

## Props
| Property | Description |
|:--|:--|
| data | the data of chart |
| options | the options of chart |
| type | the type of chart, default `Line` |
| listener| the listener of chart |

See the document of [Chartist](https://gionkunz.github.io/chartist-js/api-documentation.html) for detail.

## Contribution
First, install dependencies
```
npm install
```
Second, setup development environment
```
npm run dev
```

## License
MIT
