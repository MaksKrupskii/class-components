import { Component } from 'react';
import { Button, ErrorButton } from '../button/button';

type SearchProps = {
  value: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

class Search extends Component<SearchProps> {
  render() {
    return (
      <div className="search-block">
        <input value={this.props.value} onChange={this.props.onInput} />
        <Button value="Search" onClick={this.props.onSearch} />
        <ErrorButton />
      </div>
    );
  }
}

export default Search;
