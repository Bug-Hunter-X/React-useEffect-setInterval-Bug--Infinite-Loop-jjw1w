# React useEffect setInterval Bug: Infinite Loop

This repository demonstrates a common bug in React applications involving the `setInterval` function within a `useEffect` hook. The provided code incorrectly uses `setInterval` to increment a counter, causing an infinite loop that doesn't stop after a specific number of executions.  The solution provides a corrected implementation using `setTimeout` for better control over the execution count.

## Bug Description

The primary issue is how `setInterval` is used within the `useEffect` hook.  `setInterval` is designed to execute repeatedly at a set interval, and in this case, it runs every second without any termination condition.  This consumes unnecessary resources and causes unpredictable behavior.

## Solution

The solution utilizes `setTimeout` recursively to achieve the same effect.  This provides much more controlled execution and avoids potential issues caused by `setInterval`'s continuous execution.

## How to run the code

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.