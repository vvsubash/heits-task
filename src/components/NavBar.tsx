import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-3xl font-semibold">Heits Tasks</a>
      </div>
      <div className="navbar-end">
        <button className="btn">
          <Link to="add-task">Add Task</Link>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
