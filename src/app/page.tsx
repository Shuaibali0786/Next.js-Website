
export default function Home() {
  return (
    <div className="home">
        <div className="right">
            <h1>Welcome!</h1>
            <h2>Your Website</h2>
            <div className="button">
                <button className="btn">Explore...</button>
            </div>
        </div>
        <div className="left">
            <form>
                <h2>Login</h2>
                <input type="text" className="shuaib" placeholder="User-Name" required/> <br/>
                <input type="password" className="shuaib" placeholder="User-Pasworld"required/> <br/>
                <div className="checkbox">
                    <input className="check" type="checkbox"  /><h3>agree</h3>
                    <a href="">Forget Pasworld</a>
                </div>
                <div className="button">
                    <button className="btn">Login In</button>
                </div>
            </form>
        </div>
    </div>
    
  
  );
}