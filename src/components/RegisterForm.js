import Button from './Button';
import '../style/RegisterForm.css';

function RegisterForm() {
    return (
        <div class="container-fluid p-0">
            <div class="bg-dark text-info p-3 text-center">
                <text class="h2 ">Registration Form</text>
            </div>
            <div class="col-4 mx-auto">
                <form action="" class="form-control bg-dark"> 
                    <label for="first">First Name:</label> 
                    <input type="text" id="first" 
                        name="first" class="form-control"
                        placeholder="Enter your first name" required/> 
        
                    <label for="last">Last Name:</label> 
                    <input type="text" id="last" 
                        name="last" class="form-control"
                        placeholder="Enter your last name" required/> 
        
                    <label for="email">Email:</label> 
                    <input type="email" id="email" 
                        name="email" class="form-control"
                        placeholder="Enter your email" required/> 
        
                    <label for="dob">Date of Birth:</label> 
                    <input type="date" 
                        id="dob" name="dob" class="form-control"
                        placeholder="Enter your DOB" required/> 
        
                    <label for="password">Password:</label> 
                    <input type="password" id="password" 
                        name="password" class="form-control"
                        placeholder="Enter your password"
                        pattern= 
                        "^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$" required                    
                        title="Password must contain at least one number,  
                            one alphabet, one symbol, and be at  
                            least 8 characters long"/> 
        
                    <label for="repassword">Re-type Password:</label> 
                    <input type="password" id="repassword" 
                        name="repassword" class="form-control" 
                        placeholder="Re-Enter your password" required/>
                    <span id="pass"></span> 
        
                    <label for="mobile">Contact:</label> 
                    <input type="text" id="mobile" 
                        name="mobile" class="form-control"
                        placeholder="Enter your Mobile Number" required 
                        maxlength="10"/> 
        
                    <label for="gender">Gender:</label> 
                    <select id="gender" name="gender" class="form-control" required> 
                        <option value="male">Male</option> 
                        <option value="female">Female</option> 
                        <option value="other">Other</option> 
                    </select> 
                    <Button />  
                </form>
            </div>
        </div>
    );
  }

  export default RegisterForm;