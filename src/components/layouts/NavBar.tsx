import LogoutButton from "../LogoutButton";

const Navbar = () => {
    return (
      <header>
        <div className="flex flex-row-reverse bg-fuchsia-600">
          <nav>
            {/* navigation items */}
            <LogoutButton />
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;