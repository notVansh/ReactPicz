import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos?page=1&per_page=300", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  onScrollClick = () => {
    window.scrollTo(0, 0);
  };

  readerContent = () => {};

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "20px" }}>
          <h2 className="ui header" style={{ textAlign:"center" }}>ReactPicz</h2>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div className="">
            <ImageList images={this.state.images} />
          </div>
        </div>
        <button
          className="ui inverted blue button"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: "2",
          }}
          onClick={this.onScrollClick}
        >
          Scroll - Top &#x25B2;
        </button>
      </div>
    );
  }
}

export default App;
