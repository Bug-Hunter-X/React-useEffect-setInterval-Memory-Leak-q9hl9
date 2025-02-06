# React useEffect setInterval Memory Leak
This example demonstrates a common issue in React applications where `setInterval` within a `useEffect` hook causes memory leaks because of improper cleanup.  The component continues to update even after it's unmounted.

## Bug
The `bug.js` file showcases the faulty implementation.  The `setInterval` function is started, but the interval ID isn't correctly handled when the component unmounts, leading to the leak.

## Solution
The `bugSolution.js` file provides a corrected version.  The key change is using a cleanup function to clear the interval when the component unmounts.