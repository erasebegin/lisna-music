import React from "react";
import Contact from "./Contact"
import SampleCard from "./SampleCard"
import SearchBar from "./SearchBar"

function Samples() {
  return (
    <div className="container-samples">
      <h1>Samples</h1>
      <SearchBar />
      <SampleCard />
      <Contact />
    </div>
  );
}

export default Samples;
