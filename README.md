# Highcharts performance

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Configuring the tests

- Go to `src/scripts/index.js`
- `POINTS` sets the number of points to generate
- `TURBO` toggles the turbo mode on/off
- `BOOST` toggles the boost mode on/off

### Viewing the results

- Run the dev server and open the console
- The results will be shown in the console, where ´scatter´ represents the timer
- Example output:

```
------------------------------
Turbo: on
Boost: off
2000 points
scatter: 3140.81396484375 ms
------------------------------
```

### Example
![Scatter chart](https://raw.githubusercontent.com/martinkrulltott/highcharts-performance-testing/main/images/example.png)
