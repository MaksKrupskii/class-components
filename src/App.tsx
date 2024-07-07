import { Component } from 'react';
import Search from './components/search';
import SearchResult from './components/searchResult';
import ErrorBoundary from './components/errorBoundary';
import './App.css';

type AppState = {
  search: string;
  searchResult: [];
  isLoading: boolean;
};

type AppProps = Record<string, never>;

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      search: '',
      searchResult: [],
      isLoading: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ search: e.target.value });
  }

  async handleSearch(search?: string) {
    this.setState({ isLoading: true });
    const character = search ? search : this.state.search;
    const responce = await fetch(
      `https://swapi.dev/api/people/?search=${character}`,
    );
    const result = await responce.json();
    this.setState({ searchResult: result.results });
    window.localStorage.setItem('search', character);
    this.setState({ isLoading: false });
  }

  componentDidMount(): void {
    const search = window.localStorage.getItem('search');
    if (search) {
      this.setState({ search });
    }
    this.handleSearch(search ?? '');
  }

  render() {
    return (
      <div className="main-page">
        <ErrorBoundary>
          <Search
            value={this.state.search}
            onInput={this.handleInput}
            onSearch={this.handleSearch}
          />
          <SearchResult
            result={this.state.searchResult}
            isLoading={this.state.isLoading}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
