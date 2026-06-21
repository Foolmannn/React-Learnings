// React Transitions

// What is useTransition?

// The useTransition hook helps you keep your React app responsive during heavy updates.

// It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.

// When to Use Transitions?
    // Use transitions when you have:

    // A slow operation that might freeze the UI
    // Updates that aren't immediately critical
    // Search results that take time to display


// Basic Example
// Here's a simple example showing how to use transitions in a search feature:

// In this example:

    // The input field updates immediately (urgent update)
    // The search results update is marked as a transition (non-urgent)
    // The loading message shows while the transition is pending

// Real-World Example
// Here's a more practical example with a slow search feature:

// Example

// How this example works:

    // When you type in the input field, it updates immediately
    // The search results update is wrapped in startTransition
    // While the results are updating, isPending is true
    // The UI stays responsive even with many results


// useTransition Hook
// The useTransition hook returns two items:

    // isPending: tells you if a transition is active
    // startTransition: function to mark updates as transitions
    
// Note: Use transitions only for non-urgent updates. For example, typing in an input field should be urgent, but filtering a large list can be a transition.