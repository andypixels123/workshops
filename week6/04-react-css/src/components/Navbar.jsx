function Navbar() {
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        className="m-1 rounded-2xl border-4 border-indigo-800 bg-sky-400 p-4 hover:bg-sky-200"
      >
        Home
      </a>
      <a
        href="#"
        className="m-1 rounded-2xl border-4 border-indigo-800 bg-sky-400 p-4 hover:bg-sky-200"
      >
        About
      </a>
      <a
        href="#"
        className="m-1 rounded-2xl border-4 border-indigo-800 bg-sky-400 p-4 hover:bg-sky-200"
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar;