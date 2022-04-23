import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse d-flex justify-content-center fw-bold">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
