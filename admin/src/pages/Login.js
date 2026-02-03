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
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, response, message } = useSelector((state) => state.user);

  useEffect(() => {
    const token = response?.data?.access_token;

    if (token) {
      if (rememberMe) {
        localStorage.setItem('userToken', token);
      } else {
        sessionStorage.setItem('userToken', token);
      }

      navigate('/dashboard');
    }

    if (error) {
      toast.error(message || 'Invalid credentials');
    }
  }, [response, error, message, rememberMe, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning('Email and password required');
      return;
    }

    dispatch(
      signin({
        username: email.trim(),
        email: email.trim(),
        password,
        secretKey: process.env.REACT_APP_ADMIN_SECRET
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
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            placeholder="Enter Email Address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="rememberMe"
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label className="custom-control-label" htmlFor="rememberMe">
                              Remember Me
                            </label>
                          </div>
                        </div>

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
