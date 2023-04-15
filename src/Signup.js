import { useState} from "react";


function Signup(){
    
        let showMessage = document.getElementById('showMessage');

        const [color, setColor] = useState('red');
        const [message, setMessage] = useState('');

        if(color == 'green'){
            setColor('red');
        }

        const [fullname, setFullname] = useState('');
        const [fullnameValid, setFullnamevalid] = useState(false);

        
        function validFullName(e){
            let name = e.target.value;
            setFullname(name);

            let arr = name.split(" ");
            if(arr.length >= 2 && showMessage){
                setFullnamevalid(true);
                setMessage('');
                showMessage.innerText = message;
            }
            else if(showMessage){
                setMessage('Fullname has atleast 2 words');
                showMessage.style.color = color;
                showMessage.innerText = message;
            }
        }

        const [email, setEmail] = useState('');
        const [emailValid, setEmailValid] = useState(false);

        function validEmail(e){
            let mail = e.target.value;
            setEmail(mail);
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(mail.match(reg) && showMessage){
                setMessage('');
                showMessage.innerText = message;
                console.log('mail ',mail);
                console.log(('email ',email));
                setEmailValid(true);
            }else if(showMessage){
                setMessage('Please Enter valid email');
                showMessage.style.color = color;
                showMessage.innerText = message;
            }
        }


        const [pass, setPass] = useState('');
        const [passValid, setPassValid] = useState(false);

        function validPassword(e){
            let pass = e.target.value;
            setPass(pass);
            if(pass.length < 7 && showMessage){
                setMessage('Password should content atleast 8 character');
                showMessage.style.color = color;
                showMessage.innerText = message;
            }else if(showMessage){
                setMessage('');
                showMessage.innerText = message;
                setPassValid(true);
            }
        }

        const [cpass, setCpass] = useState('');
        const [cpassValid, setCpassValid] = useState('');

        function validConfirmPass(e){
            let confirmpass = e.target.value;
            setCpass(confirmpass);
            console.log("pass", confirmpass);
            if(validateConfirmPassword(pass,confirmpass)){
                // console.log('comein');
                setMessage('');
                showMessage.innerText = '';
                setCpassValid(true);
            }else{
                setMessage('Please enter same password');
                showMessage.style.color = color;
                showMessage.innerText = message;
            }
        }

        function validateConfirmPassword(password,confirmPassword){
            return password === confirmPassword
        }

        function validateForm(e){
            e.preventDefault();
            if(fullnameValid && emailValid && passValid && cpassValid){
                if(showMessage){
                    alert('Sucessfully Submited')
                    // setColor('green');
                    // setMessage('Sucessfully Submited');
                    console.log("mesg ", message);
                    showMessage.style.color = 'green';
                    showMessage.innerText = 'Sucessfully Submited';
                }
                document.querySelector('form').reset();
            }
            
        }

    
    return(
        <div className="main">
            <div className="signup">
                <h1>Signup</h1>
                <form onSubmit={validateForm}>
                    <input 
                        type="text" 
                        placeholder="Full Name"
                        onChange={validFullName}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        onChange={validEmail}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={validPassword}
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password"
                        onChange={validConfirmPass}
                    />
                    <p id="showMessage"></p>
                    <input type="submit" value="Signup"/>
                </form>
            </div>
        </div>
    )
}

export default Signup;