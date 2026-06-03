// The map() Method
// The map() method creates a new array with the results of calling a function for every array element.

const numbers = [1,2,3,4,5]

const doubled  = numbers.map(x=>x*2)

console.log(doubled)

/*
*/
/*
map() in React
The map() method is commonly used in React to render lists of elements:

*/

const fruits = ['apple','banana','cherry']

function myList(){

    return (

        <ul>
            {fruits.map(fruit => 
                <li key= {fruit}>{fruit}</li>
            )}
        </ul>
    )
}

// NOTE: WHEN USING MAP() IN REACT TO CREATE LIST ITEMS, EACH ITEM NEEDS A UNIQUE KEY PROP.

/*
map() with Objects
You can also use map() with arrays of objects:
*/

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function UserList() {
  return (
    <ul>
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}
// John is 30 years old
// Jane is 25 years old
// Bob is 35 years old

/*
map() Parameters
The map() method takes three parameters:

currentValue - The current element being processed
index - The index of the current element (optional)
array - The array that map was called upon (optional)
 */

const fruitlist = ['apple', 'banana', 'cherry'];

function App() {
  return (
    <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Name: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  );
}
// Name: apple, Index: 0, Array: applebananacherry
// Name: banana, Index: 1, Array: applebananacherry
// Name: cherry, Index: 2, Array: applebananacherry

// NOTE: THE MAP() METHOD ALWAYS RETURNS A NEW ARRAY. IT DOES NOT MODIFY THE ORIGINAL ARRAY.