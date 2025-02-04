import React from 'react';
import google from '../../../image/Social/google-logo-9824.png'
import facebook from '../../../image/Social/facebook-logo-497.jpg'
import github from '../../../image/Social/512x512-logo-27170.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate ();
    let errorElement;

    if (error || error1) {
       
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
        
      }

      if (user || user1) {
            navigate ('/home');
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-50 d-block mx-auto mb-4'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>

                <button className='btn btn-secondary w-50 d-block mx-auto mb-4'>
                    <img style={{width: '30px'}} src={facebook} alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 d-block mx-auto'>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;