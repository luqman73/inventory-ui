import LogoutButton from "./LogoutButton";

const Header = () => {
    return (
      <header>
        <div className="flex flex-row-reverse bg-orange-400">
          <nav>
            {/* navigation items */}
            <LogoutButton />
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;