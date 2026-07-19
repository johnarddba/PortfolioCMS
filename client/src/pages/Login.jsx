function Login() {
  return (
    <div className="container">
      <h1>Admin Login</h1>

      <form>
        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;