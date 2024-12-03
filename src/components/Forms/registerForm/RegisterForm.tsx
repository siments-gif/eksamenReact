const RegisterForm = () => {
  return (
    <section>
        <h2>Register new user</h2>
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
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    value=""
                    onChange={(e) => setEmail(e.target.value)}
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
            <div>
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    value=""
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </form>
    </section>
  )
}

export default RegisterForm