# Dynamic Time Warping for Time-Series Root Cause Analysis

Industrial systems generate continuous streams of sensor data: temperature, vibration, pressure, flow rate, motor current, and many other signals. When a machine behaves abnormally, the question is rarely just "did something change?" A better question is "which signal changed first, and how similar is this new behavior to a known fault pattern?"

Dynamic Time Warping, usually called DTW, is useful for this kind of investigation because it compares the shape of two time-series signals even when one signal is stretched, delayed, or compressed in time.

## Why Euclidean Distance Is Not Always Enough

Suppose two machines produce similar vibration patterns during startup. Machine A reaches peak vibration at second 5. Machine B reaches the same peak at second 7 because it started under a slightly different load.

If we compare both signals point by point using Euclidean distance, the result may look very different even though the underlying behavior is similar. DTW solves this by allowing flexible alignment between the two sequences.

Instead of forcing timestamp 5 to match timestamp 5, DTW can align timestamp 5 in one sequence with timestamp 7 in another sequence if that produces a better shape match.

## A Simple Example

Imagine we have a known healthy sensor pattern and a new observed pattern:

```python
healthy = [1, 2, 3, 5, 6, 5, 3, 2, 1]
observed = [1, 1, 2, 3, 5, 6, 5, 3, 2, 1]
```

The observed signal is almost the same shape, but it is shifted because the rise starts more slowly. A strict point-by-point comparison will penalize that delay. DTW will recognize that these two signals still follow the same pattern.

Here is a small Python implementation:

```python
def dtw_distance(series_a, series_b):
    n = len(series_a)
    m = len(series_b)

    dp = [[float("inf")] * (m + 1) for _ in range(n + 1)]
    dp[0][0] = 0

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            cost = abs(series_a[i - 1] - series_b[j - 1])
            dp[i][j] = cost + min(
                dp[i - 1][j],
                dp[i][j - 1],
                dp[i - 1][j - 1],
            )

    return dp[n][m]


healthy = [1, 2, 3, 5, 6, 5, 3, 2, 1]
observed = [1, 1, 2, 3, 5, 6, 5, 3, 2, 1]
fault_pattern = [1, 2, 4, 8, 9, 7, 4, 2, 1]

print("Healthy vs observed:", dtw_distance(healthy, observed))
print("Fault vs observed:", dtw_distance(fault_pattern, observed))
```

If the DTW distance between the observed signal and the healthy pattern is low, the machine is likely behaving normally with a time shift. If the distance to a known fault pattern is lower, that signal may be part of the root cause.

## Using DTW for Root Cause Analysis

In a real industrial system, we usually do not analyze one sensor in isolation. A machine can have many synchronized sensor streams. For example:

- Motor current
- Vibration
- Temperature
- Pressure
- Flow rate

When an anomaly is detected, DTW can compare each sensor stream against historical healthy patterns and known fault signatures. The sensors with the largest deviation from healthy behavior, or the closest match to a known fault pattern, become strong root cause candidates.

A practical workflow can look like this:

1. Collect a window of recent sensor data around the anomaly.
2. Normalize each sensor stream so scale differences do not dominate the result.
3. Compare each stream with healthy baselines using DTW.
4. Compare each stream with known fault signatures.
5. Rank sensors by DTW distance and timing of deviation.
6. Use the ranking to guide fault localization.

## Why This Matters on Edge Devices

In edge AI systems, latency matters. Sending every sensor reading to the cloud can be expensive or too slow for real-time decisions. A lightweight DTW-based analysis can run close to the machine, identify suspicious sensor channels, and send only useful summaries upstream.

This makes DTW valuable for:

- Early anomaly detection
- Fault localization
- Sensor-level explainability
- Reducing cloud bandwidth
- Real-time industrial monitoring

## Limitations

DTW is powerful, but it is not perfect.

It can be computationally expensive for long sequences, so windowing or constrained DTW methods may be needed. It also requires careful normalization because raw sensor values can have very different scales. Finally, DTW measures similarity in shape, but domain knowledge is still needed to interpret whether a matched pattern is physically meaningful.

## Final Thoughts

Dynamic Time Warping is a practical technique for comparing time-series data when events happen at slightly different speeds. For industrial sensor data, that flexibility is important. Machines do not always fail on a perfectly aligned timeline.

By combining DTW with anomaly detection, known fault signatures, and edge deployment, we can build systems that do more than detect problems. We can start explaining where the problem is likely coming from.
