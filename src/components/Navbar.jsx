import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav aria-label="Site Nav" className="mx-auto flex max-w-3xl items-center justify-between p-4 ">
      <Link
        to="/"
        className="inline-flex h-10 items-center justify-center rounded-lg text-white font-extrabold text-[2rem] "
      >
        Ph <span className="text-red-500">.</span>
      </Link>

      <ul className="flex items-center gap-5  text-white text-[1rem]">
        <li>
          <a
            href="https://github.com/priyankarpal/ProjectsHut"
            target={"_blank"}
            rel={"noreferrer"}
            className="text-[1.5rem] "
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <Link
            to="/ContributorsPage"
            className="inline-flex h-10 items-center justify-center rounded-md text-white font-bold hover:bg-slate-900 p-1"
          >
            Contributors
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
