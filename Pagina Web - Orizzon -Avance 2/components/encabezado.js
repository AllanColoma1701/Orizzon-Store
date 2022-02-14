app.component('encabezado', {
    template: 
    /*html*/
    `
    <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style="color: firebrick;">Orizzon</a>
        <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./html/Notificaciones.html">Notificaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../html/login.html">Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./html/Configuracion.html">Configuración</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
    `
  })