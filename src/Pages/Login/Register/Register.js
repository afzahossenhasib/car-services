import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocilaLogin/SocialLogin';
import './Register.css';

const Register = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate ();

    const navigateLogin = () => {
        navigate ('/login')
    }

    if (user) {
        navigate ('/home');
    }

    const handleRegister = async (event) => {
        event.prevantDefault ();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await  createUserWithEmailAndPassword (email, password);
        await updateProfile({ displayName: name });
          alert('Updated profile');
        
    }


    return (
        <div className='register-form'>
            <h1 style = {{textAlign: 'center'}}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='Type Your Name'/> <br />
                <input type="email" name="email" id="" placeholder='Your Email' required/> <br />
                <input type="password" name="password" id="" placeholder='Type Password'required/>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms And Condition</label>  */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Terms And Condition</label> 

                <input disabled={!agree} className='w-50 d-block mx-auto btn btn-primary mt-3' type="submit" value="Register" />
            </form>
            <p>Alradey Have An Account? <Link to = '/login' className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>PLease Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;