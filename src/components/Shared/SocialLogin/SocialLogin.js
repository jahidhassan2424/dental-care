import React from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location =useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn-social-login btn btn-primary'>Continue with GOOGLE</button>

        </div>
    );
};

export default SocialLogin;