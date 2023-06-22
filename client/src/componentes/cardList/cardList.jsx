import { useState } from "react";
import Cards from "../cards/cards"
import Pagination from "../pagination/pagination";
import "./cardList.styles.css"

export default function CardList({ allCountries, sortOrder, selectedContinent, showAllCountries }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);
    let countriesList = allCountries;
  
    if (!Array.isArray(countriesList)) {
      return <div>No se encontró un país con ese nombre</div>;
    }
  
    if (!showAllCountries) {
      if (selectedContinent) {
        countriesList = countriesList.filter(
          (country) => country.continent === selectedContinent
        );
      } else {
        countriesList = [];
      }
    }
  
    const sortedCountries = countriesList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = sortedCountries.slice(indexOfFirstCard, indexOfLastCard);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="card-list">
        {currentCards.map((countries, index) => (
          <Cards key={index} countries={countries} />
        ))}
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={sortedCountries.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    );
  }
  