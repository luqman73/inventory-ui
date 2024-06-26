import LogoutButton from "../LogoutButton";

const Navbar = () => {
    return (
        <div className="flex flex-row-reverse bg-fuchsia-600">
          <nav>
            {/* navigation items */}
            <LogoutButton />
          </nav>
        </div>
    );
  };
  
  export default Navbar;