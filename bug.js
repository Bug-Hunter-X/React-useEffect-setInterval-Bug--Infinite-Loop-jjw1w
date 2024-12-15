```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The second argument is the delay in milliseconds,
    // not the number of times to execute the function.
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Executes every second, not 10 times.

    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, []);

  return <div>Count: {count}</div>;
}
```