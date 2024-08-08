"use client";

import React, { useState, useEffect } from "react";
import { postInterface } from '../interfaces/posts-interfaces';




const Prueba: React.FC<postInterface> = ({ data }) => {

    const [datas, setData] = useState<postInterface[]>([]); 
  const [no, setNo] = useState("");
  const [response, setResponse] = useState(null);



  useEffect(() => {
    console.log(data)
    setData(data);
  }, []); 


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    console.log('there');
    const newItem = {
      title: "nuevo pooosstt",
      content:"asd",
      subtitle: "hol hola",
      date:"aksdfasd",
      bibliografia: ["kabsdf"]
  }

    const res = await fetch("http://portafolio-nest-env.eba-8pf6vye8.us-east-2.elasticbeanstalk.com//api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <>
   
      <section className="mt-36">
        <div>
          <h1>Create a new Pokemon</h1>
          <form onSubmit={handleSubmit}>
            <button type="submit">dale</button>
          </form> 
          {response && (
            <div>
              <h2>Response from server:</h2>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="mt-8">
          {datas.map((item) => (
            <div key={item.title} className="flex">
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Prueba
