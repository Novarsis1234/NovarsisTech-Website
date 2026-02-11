import { useState, useEffect } from 'react';
import signinimage from '../asserts/img/software.png';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../slice/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const rememberMe = false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, response, message } = useSelector((state) => state.user);

  /* ================= LOGIN SUCCESS ================= */
  useEffect(() => {
    const token = response?.accessToken;
    const refreshToken = response?.refreshToken;

    if (token) {
      if (rememberMe) {
        localStorage.setItem('userToken', token);
      } else {
        sessionStorage.setItem('userToken', token);
      }

      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }

      toast.success('Login Successful');
      navigate('/dashboard');
    }

    if (error) {
      toast.error(message || 'Invalid credentials');
    }
  }, [response, error, message, rememberMe, navigate]);

  /* ================= LOGIN HANDLER ================= */
  const loginHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning('Username and password are required');
      return;
    }

    // 👇 EMAIL INPUT KO USERNAME ME BHEJ RAHE
    dispatch(
      signin({
        username: email.trim(),
        password: password,
        secretkey: process.env.REACT_APP_ADMIN_SECRET
      })
    );
  };

  return (
    <section className="sign-in">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row mt-5">
                  <div className="col-lg-6 d-none d-lg-block text-center">
                    <img src={signinimage} alt="login" className="img-fluid" />
                  </div>

                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 mb-4 text-dark">
                          <strong>Welcome Admin</strong>
                        </h1>
                      </div>

                      <form className="user" onSubmit={loginHandler}>
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Enter Username / Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                          type="password"
                          className="form-control mb-3"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                          type="submit"
                          disabled={loading}
                          className="btn addbtn btn-user btn-block"
                          text={loading ? 'Logging in...' : 'Login'}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
