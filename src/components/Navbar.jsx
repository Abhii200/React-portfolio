import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900">
      <div className="container mx-auto py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">AB</span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 text-lg text-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-violet-500' : 'hover:text-gray-300'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? 'text-violet-500' : 'hover:text-gray-300'
                }
              >
                Experience
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? 'text-violet-500' : 'hover:text-gray-300'
                }
              >
                Projects
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            {/* Placeholder div to balance the flex layout */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;