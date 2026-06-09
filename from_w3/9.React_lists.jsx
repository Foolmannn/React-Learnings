// React Lists
// In React, you will render lists with some type of loop.

// The JavaScript map() array method is generally the preferred method.
// When you run this code in your React environment, it will work but you will receive a warning that there is no "key" provided for the list items.

// Keys in React Lists
// Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

// Keys must be unique among siblings, but they don't have to be unique across the entire application.

// Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

// Using Array Index as Keys
// While it's possible to use the array index as a key, it's not recommended unless:

// The list is static (won't change)
// The list will never be reordered or filtered
// The items in the list have no IDs