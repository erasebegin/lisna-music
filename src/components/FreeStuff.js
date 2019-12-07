import React from "react";
import Contact from "./Contact"
import SampleCard from "./AudioCard"
import SearchBar from "./SearchBar"

function FreeStuff() {
  return (
    <div className="container-samples">
      <h1>Samples</h1>
      <SearchBar />
      <SampleCard />
      <Contact />
    </div>
  );
}

export default FreeStuff;
