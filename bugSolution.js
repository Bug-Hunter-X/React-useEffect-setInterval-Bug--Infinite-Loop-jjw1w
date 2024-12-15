```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [executionCount, setExecutionCount] = useState(0);
  const maxExecutions = 10;

  useEffect(() => {
    function incrementCount() {
      setCount((prevCount) => prevCount + 1);
      setExecutionCount((prevCount) => prevCount + 1);
      if (executionCount < maxExecutions) {
        const timeoutId = setTimeout(incrementCount, 1000);
        return () => clearTimeout(timeoutId);
      }
    }
    incrementCount();
  }, [executionCount]);

  return <div>Count: {count}</div>;
}
```