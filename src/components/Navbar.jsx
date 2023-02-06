import CartWidget from "./CartWidget"



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
    <div className="container">
      <a className="navbar-brand" href="#">La Florita.Slow Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-4 mx-5" id="navbarNavDarkDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Flores Secas</a></li>
              <li><a className="dropdown-item" href="#">Decoracion</a></li>
              <li><a className="dropdown-item" href="#">Eventos</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="btn btn-light mx-4"><CartWidget/></button>
    
  </nav>
  
 
  )
}

export default Navbar