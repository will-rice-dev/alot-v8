export default function Navbar() {
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">A Lot</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
