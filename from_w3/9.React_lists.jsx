// React Lists
// In React, you will render lists with some type of loop.

// The JavaScript map() array method is generally the preferred method.
//Example

function MyCars(){
    const cars = ["ford","BMW", "Tesla"];
    return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ul>
    </>
  );
  
}
createRoot(document.getElementById('root')).render(
  <MyCars />
);
// When we run this code in your React environment, it will work but you will receive a warning that there is no "key" provided for the list items.



// Keys in React Lists
// Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

// Keys must be unique among siblings, but they don't have to be unique across the entire application.

// Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

// Example 

function MyCars() {
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
      {cars.map((car)=><li key={car.id}>My Brand is {car.brand}</li>)}
      </ul>
    </>
  );
}
// Using Array Index as Keys
// While it's possible to use the array index as a key, it's not recommended unless:

// The list is static (won't change)
// The list will never be reordered or filtered
// The items in the list have no IDs


// Using array indexes as keys (not recommended for dynamic lists):

function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
        <h1>Cars: </h1>
        <ul>
            {cars.map((car,index)=><li key={index}>My car brand is : {car.brand}</li>)}
        </ul>
        </>
    );


}