import { Component } from 'react';
import './styles.css';

type SearchResultProps = {
  result: [];
  isLoading: boolean;
};

type Hero = {
  name: string;
  height: string;
  mass: string;
};

class SearchResult extends Component<SearchResultProps> {
  render() {
    if (this.props.isLoading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="search-result">
        {this.props.result.map((item: Hero) => (
          <div key={item.name} className="search-result_item">
            <h2>Name: {item.name}</h2>
            <div>height: {item.height}</div>
            <div>Mass: {item.mass}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResult;
