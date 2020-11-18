import React from 'react';
import web from "../src/images/services.jpeg"
import Card from "./Card";
import CardData from "./CardData";



const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5" >
        <div className='row' >
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                CardData.map( (val , index) => {
                  return <Card key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                    />
                } )
              }
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Service;
