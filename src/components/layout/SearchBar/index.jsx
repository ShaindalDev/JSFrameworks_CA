import React, { useState, useEffect } from "react";
import { StyledSearchBar } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { API_URL } from "../../../utils/constants";

export default function SearchBar() {
  const [data, setData] = useState([]);

  const [userInput, setUserInput] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    
    setSuggestions([]);
    setUserInput("");
  }, [pathname]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setUserInput(query);

    
    if (query.length > 2) {
      const filteredSuggestions = data.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setSuggestions(filteredSuggestions);
    }

    if (query.length === 0) {
      setSuggestions([]);
    }
  }

  let selected = -1;

  function handleNavigation(event) {
    const key = event.key;

    switch (key) {
      case "Enter":
        goToPage();
        break;
      case "ArrowDown":
        navigateSuggestions(1, event.target);
        break;
      case "ArrowUp":
        navigateSuggestions(-1, event.target);
        break;
      case "Backspace":
        removeStyles();
        break;
      default:
        break;
    }
  }

  function goToPage() {
    const chosenSuggestion = suggestions[selected];
    chosenSuggestion
      ? window.location.replace(`/Product/${chosenSuggestion.id}`)
      : window.location.replace("/SearchResults");
  }

  function navigateSuggestions(direction, target) {
    const newSelected = selected + direction;
    if (newSelected >= 0 && newSelected < suggestions.length) {
      selected = newSelected;
      target.value = suggestions[selected].title;
      const selectedSuggestion = suggestions[selected].id;
      suggestions.forEach((suggestion) => {
        const li = document.getElementById(suggestion.id);
        suggestion.id === selectedSuggestion
          ? li.classList.add("selected")
          : li.classList.remove("selected");
      });
    }
  }

  function removeStyles() {
    suggestions.forEach((suggestion) => {
      const li = document.getElementById(suggestion.id);
      li.classList.remove("selected");
    });
  }

  return (
    <StyledSearchBar>
      <div className="input-wrapper">
        <label htmlFor="search-bar"></label>
        <span className="material-symbols-rounded">search</span>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleNavigation}
        />
      </div>
      <ul>
        {suggestions.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              <Link to={`/Product/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </StyledSearchBar>
  );
}

//Testing different approach to make search more user friendly. So the code below is commented out for the moment
// import { useStore } from "zustand";
// import { NoResultFound, StyledSearchBar } from "./styles";
// import SearchItem from "../../SearchItem";
// export const search = function (data, query) {
//   return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
// };

// export default function Search() {
//   const { isLoading, IsError, data } = useStore((state) => state.products);
//   const [query, setQuery] = useState("");

//   let result = search(data, query);
//   if (query.trim() === "" || query.length < 2) {
//     result = [];
//   }

//   function onInputQuery(event) {
//     setQuery(event.currentTarget.value);
//   }

//   return (
//     <StyledSearchBar>
//       <div className="input-wrapper">
//         <label htmlFor="search-bar"></label>
//       <span className="material-symbols-rounded">search</span>
//         <input
//           id="search"
//           type="search"
//           placeholder="Search"
//           autoComplete="off"
//           disabled={isLoading && IsError} onChange={onInputQuery} value={query}
//         />
//       </div>
//         {result.length > 0 ? (
//          <ul>
//           {" "}
//           {result.map((item) => (
//             <SearchItem key={item.id} item={item} />
//           ))} 
//           </ul>
//         ) : query.length > 1 && query.trim() !== "" ? (
//           <NoResultFound>No matching result for "{query}"</NoResultFound>
//         ) : (
//           ""
//         )}
      
//     </StyledSearchBar>
//   )
// }