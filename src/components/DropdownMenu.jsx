const DropdownMenu = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div className="nav-item relative">
      <span
        onClick={toggleDropdown}
        className="px-3 py-2 flex items-center text-base font-semibold leading-snug text-white hover:opacity-75 cursor-pointer"
      >
        <i className="fa-solid fa-user-plus mr-2" /> {title}
        <i
          className={`fa-solid ${isOpen
            ? "fa-angle-up"
            : "fa-angle-down"} ml-2`}
        />
      </span>

      {/* Dropdown menu */}
      {isOpen &&
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <ul className="py-2">
            {items.map((item, index) =>
              <li key={index}>
                <span
                  onClick={item.onClick}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {item.label}
                </span>
              </li>
            )}
          </ul>
        </div>}
    </div>
  );
};

export default DropdownMenu;
