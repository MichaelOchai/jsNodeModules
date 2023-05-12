//Description: The Timers module provides functions for scheduling the execution of code in the future or at regular intervals.
//Usage: The Timers module allows you to schedule code execution after a delay or at fixed intervals, useful for implementing timeouts, intervals, and recurring tasks.
//Example: Scheduling a function to run after a specific delay.

const setTimeoutId = setTimeout(() => {
    console.log('Delayed function executed');
  }, 2000);
  