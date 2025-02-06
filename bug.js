```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a variable declared outside useEffect
    let intervalId;
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // This cleanup function is crucial
  }, []);

  return <div>Count: {count}</div>;
}
```