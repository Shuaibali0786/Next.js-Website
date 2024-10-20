
import "../style/style.css"

export default function NavBar() {
    return (
       <header>
        <h1>Shuaib</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </nav>
        <div className="button">
            <button className="btn">Sign Up</button>
            <button className="btn">Log In</button>
        </div>
       </header>
    );
}