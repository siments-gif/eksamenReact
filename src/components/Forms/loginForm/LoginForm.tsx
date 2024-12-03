const LoginForm = () => {
  return (
    <section>
    <h2>Login to access application</h2>
    <form action="">
        <div>
            <label htmlFor="username">Username</label>
            <input 
                type="text"
                id="username"
                value=""
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
                type="text"
                id="password"
                value=""
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    </form>
</section>
  )
}

export default LoginForm