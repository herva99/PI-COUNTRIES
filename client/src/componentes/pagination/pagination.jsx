export default function Pagination({ cardsPerPage, totalCards, paginate }) {
    
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    );
  }
  