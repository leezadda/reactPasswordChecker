import './Inputs.css';
import my from './my.js';

function handleSubmit(e) {
  e.preventDefault();
}

function Inputs() {
  return (

<div id = "inputs">
<h1>SIGN IN</h1>
    <p id="example"></p>
        <form onSubmit={handleSubmit}>
            
                <label>Name:</label>
                <input type="text" id="namee" placeholder="First Name" />
                  <br />
                <label>Email:</label>
                    <input type="text" id="email" placeholder="123@example.com" />
                    <br />      
                <label>Password:</label>
                    <input type="text" id="password" placeholder="!@#$%123" />
                    <br />
                    <br />
                    <button id="submit" onClick={my}>Submit</button>
        </form>
</div>
  );
}

export default Inputs;
