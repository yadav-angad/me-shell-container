import React, { useContext } from "react";
import { Box, Card, Button } from "@mui/material";
import { CommonContext } from "host/context/CommonContext";
import { store } from 'host/store';
import { useSelector, useDispatch } from 'react-redux';

export default function () {
  const dispatch = useDispatch();
  store.subscribe(() => console.log(store.getState()));
  const countryData = useSelector((state) => state?.countryData);
  console.log('MFE State countryData 11:', countryData);

  console.log('MFE Store:', store.getState()?.user?.name);
  const { country, populationCounts } = countryData['India'] || {};
  console.log('MFE Store countryData:', countryData['India']);

  return (
    <Card sx={{ width: '20%', height: '100%' }}>
      <Box>
        <Button onClick={() => dispatch({ type: 'SET_USER', payload: { name: 'Amyra' } })}>Set User</Button>
        {/* {'Hello ' + user.name} */}
      </Box>
      <Box>
        {countryData['India'] && (
          <div className="india-population-container">
            <h1>Population of {country}</h1>
            <div className="population-cards-container">
              <table className="population-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                  {[...populationCounts]
                    .sort((a, b) => b.year - a.year) // Sort by year descending
                    .slice(0, 3)                     // Take last 3 years
                    .map((yearData) => (
                      <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.value.toLocaleString()}</td>
                      </tr>
                    ))}
                </tbody>
              </table>

            </div>
            <p className="source-info">Source: World Bank (or specify actual source)</p>
          </div>
        )}
      </Box>
    </Card>
  );
}

