module.exports = {
    // using template string
    index: (user) => `
          <h1><a href="/">OMDB LOGIN</a></h1>
          <h2>Bienvenido ${user.email}</h2>
          <form method="POST" action="/logout">
            <button type="submit">LogOut</button>
          </form>`,
    indexGuest: `
      <div>
        <h1><a href="/">OMDB LOGIN</a></h1>
        <h2>Bienvenido Invitado</h2>
        <ul>
          <li><a href="/login">LOGIN</a></li>
          <li><a href="/register">REGISTER</a></li>
        </ul>
      </div>
    `,
    login: `
      <div>
        <h1><a href="/">OMDB LOGIN</a></h1>
        <a href="/login"><strong>LOGIN</strong></a>
        <a href="/register">REGISTER</a>
        <div>
          <form method="POST" action="/login">
            <input placeholder="Email" name="email" />
            <input placeholder="Password" name="password" />
            <button>SUBMIT</button> 
          </form>
        </div> 
      </div>
    `,
    register: `
      <div>
        <a href="/"><h1>Cafeparatodos</h1></a>
        <a href="/login">LOGIN</a>
        <a href="/register"><strong>REGISTER</strong></a>
        <div>
          <form method="POST" action="/users">
            <input placeholder="Email" name="email" />
            <input placeholder="Password" name="password" />  
            <button>SUBMIT</button>
          </form>
        </div> 
      </div>
    `,
    private: `
      <div>
        <a href="/"><h1>Cafeparatodos</h1></a>
        <a href="/login"><strong>LOGIN</strong></a>
        <a href="/register">REGISTER</a>
  
        <h3>Private Route</h3> 
      </div>
    `,
    public: `
      <div>
        <a href="/"><h1>Cafeparatodos</h1></a>
        <a href="/login"><strong>LOGIN</strong></a>
        <a href="/register">REGISTER</a>
  
        <h3>Public route</h3>
      </div>
    `,
  }