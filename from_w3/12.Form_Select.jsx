// React Forms - Select
// Select
// A drop down list, or a select box, in React is also a bit different from HTML.

// In HTML, the selected value in the drop down list is defined with the selected attribute:

// HTML:
<select>
    <option value="Ford" selected>Ford</option>
    <option value="Volvo">Volvo</option>
    <option value="Tesla">Tesla</option>
</select>
// In React, the selected value is defined with a value attribute on the select tag:

// Example:
// React uses the value attribute to control the select box:

function MyForm(params) {
const [myCar, setmyCar] = useState("Volvo")

const handleChange=(event)=>{
setmyCar(event.target.value)
}
return(
    <form >

    <select value={myCar} onChange={handleChange}>
    <option value="Ford" >Ford</option>
    <option value="Volvo">Volvo</option>
    <option value="Tesla">Tesla</option>
</select>
    </form>
)

}

// By making these changes to the <select> element, React is able to handle it as any other input element.