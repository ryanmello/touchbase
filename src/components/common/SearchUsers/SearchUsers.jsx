import React, { useEffect, useState } from "react";
import "./SearchUsers.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchUsers = ({
  setIsSearch,
  searchInput,
  setSearchInput,
  allUsers,
}) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const redirect = useNavigate();

  const handleClose = () => {
    setIsSearch(false);
    setSearchInput("");
  };

  const openUser = (user) => {
    redirect("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  const handleSearch = () => {
    let searched = allUsers.filter((user) => {
      return Object.values(user)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    setFilteredUsers(searched);
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  return (
    <div className="search-users">
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        className="search-input"
        placeholder="Search"
      />
      <AiOutlineCloseCircle
        size={20}
        onClick={handleClose}
        className="close-icon"
      />
      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div className="search-results">
          {filteredUsers.map((user) => (
            <div
              onClick={() => openUser(user)}
              className="search-result"
              key={user.id}
            >
              <img src={user.imageLink}></img>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchUsers;
