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

import { useState, useTransition } from 'react';

function SearchBar() {
  const [text, setText] = useState('');
  const [results, setResults] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input right away
    setText(e.target.value);

    // Non-urgent: Update search results
    startTransition(() => {
      setResults(e.target.value);
    });
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <p>Search results for: {results}</p>
      )}
    </div>
  );
}

// In this example:

    // The input field updates immediately (urgent update)
    // The search results update is marked as a transition (non-urgent)
    // The loading message shows while the transition is pending

// Real-World Example
// Here's a more practical example with a slow search feature:

// Example

import { useState, useTransition } from 'react';

function SearchResults({ query }) {
  // Simulate slow search results
  const items = [];
  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(<li key={i}>Result for {query} - {i}</li>);
    }
  }
  return <ul>{items}</ul>;
}

function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input field
    setInput(e.target.value);
    
    // Non-urgent: Update search results
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
        placeholder="Type to search..."
      />
      {isPending && <p>Loading results...</p>}
      <SearchResults query={query} />
    </div>
  );
}

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