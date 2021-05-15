import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from "./Sdata";
import "./index.css";

// fat arrow function is used 
const nCard = (val) => {
  return (
    <Card
      key={val.id}
      image={val.image}
      title={val.title}
      series_name={val.series_name}
      link={val.link}
    />
  )
}


ReactDOM.render(

  <React.Fragment>
    <h1 className="heading_style"> Top 5 Netflix movies Name</h1>

    {Sdata.map(nCard)}

  </React.Fragment>,
  document.getElementById("root")



);

