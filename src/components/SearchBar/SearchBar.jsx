import './SearchBar.scss';
import zwiltArrow from '@/assets/logo-black.svg';

const SearchBar = ({placeholder = 'Search...', onSubmit}) => {
    return (
        <form onSubmit={onSubmit} action="" method="get" className="searchForm">
            <input type="search" id="search-input" name="q" placeholder={placeholder} className="searchInput" />
            <button type="submit" className="searchButton">
                <img src={zwiltArrow} alt="Search" />
            </button>
        </form>
    );
};

export default SearchBar;

