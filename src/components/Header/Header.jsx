import "./Header.css";


export default function Header(){
    return(
        <div className="Header" >
            <div className="Header-Title">
                <h1>Super Store</h1>
            </div>
            <div className="Links">
            <Link to="/Login">Login</Link>
            <Link to="/Cart">Cart</Link>
                
            </div>
        
         
        </div>
    );
}
