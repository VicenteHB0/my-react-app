import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BeerTable = () => {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/beer/random_beer', {
        params: {
          size: 15
        }
      });
      setBeers(response.data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
        <h1>Practica #9</h1>
      <button onClick={fetchBeers} className="btn btn-primary mb-4">Fetch New Beers</button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Brand</th>
            <th className="px-4 py-2">Style</th>
            <th className="px-4 py-2">Hop</th>
            <th className="px-4 py-2">Yeast</th>
            <th className="px-4 py-2">Malts</th>
            <th className="px-4 py-2">IBU</th>
            <th className="px-4 py-2">Alcohol</th>
            <th className="px-4 py-2">Blg</th>
          </tr>
        </thead>
        <tbody>
          {beers.map(beer => (
            <tr key={beer.id}>
              <td className="border px-4 py-2">{beer.id}</td>
              <td className="border px-4 py-2">{beer.name}</td>
              <td className="border px-4 py-2">{beer.brand}</td>
              <td className="border px-4 py-2">{beer.style}</td>
              <td className="border px-4 py-2">{beer.hop}</td>
              <td className="border px-4 py-2">{beer.yeast}</td>
              <td className="border px-4 py-2">{beer.malts}</td>
              <td className="border px-4 py-2">{beer.ibu}</td>
              <td className="border px-4 py-2">{beer.alcohol}</td>
              <td className="border px-4 py-2">{beer.blg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeerTable;
