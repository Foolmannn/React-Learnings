import {createRoot} from 'react-dom'

function Welcome(){
    return(
        <h1>Welcome To Our world </h1>
    );
}

createRoot(document.getElementById('root')).render(
    <Welcome />

);