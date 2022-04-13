import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocilaLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef ('');
    const passwordRef = useRef ('');
    const navigate = useNavigate();
    const location = useLocation ();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);

    const handleSumbit = event => {
        event.preventDefault ();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword (email, password);
    }

    const navigateRegister = event => {
        navigate ('/register')
    }

    const resetPassword = async() => {
      const email = emailRef.current.value;
      
      if (email) {
        await sendPasswordResetEmail(email);
          toast('Sent email');
      }
      else {
        toast ('Please Enter Your Email');
      }
    }

    if (user) {
        navigate (from, {replace: true});
    }

    if (error) {
       
      errorElement = <div>
          <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }


  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center">Please Login</h1>
      <Form onSubmit={handleSumbit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref ={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary w-50 d-block mx-auto mb-3" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New To Genuis Car? <Link to = '/register' className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>PLease Register</Link> </p>
      <p>Forget Password? <button className="text-danger pe-auto text-decoration-none btn btn-link" onClick={resetPassword}>Reset Password</button> </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
