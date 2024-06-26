export const countToValue = (targetValue, setterFunction, maxTime = 2000) => {
    let currentValue = 0;
    const increment = targetValue / (maxTime / 10);
    const interval = 1;

    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            clearInterval(timer);
            currentValue = targetValue;
        }
        setterFunction(Math.floor(currentValue));
    }, interval);

    return () => clearInterval(timer);
};