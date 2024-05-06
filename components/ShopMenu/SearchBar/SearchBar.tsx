import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (ev: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Buscar" onChange={onSearch}></input>
    </div>
  );
};

export default SearchBar;
