import React, { useContext } from "react";
import { Box, Card, Button, Alert } from "@mui/material";
import { CommonContext } from "host/context/CommonContext";
import { store } from 'host/store';
import { useSelector, useDispatch } from 'react-redux';

export default function () {
  const countryName = 'United States'; // Example country name, can be dynamic
  const dispatch = useDispatch();
  store.subscribe(() => console.log(store.getState()));
  const countryData = useSelector((state) => state?.countryData);
  console.log('MFE State countryData 11:', countryData);

  console.log('MFE Store:', store.getState()?.user?.name);
  const { country, populationCounts } = countryData[countryName] || {};

  return (
    <Card sx={{ width: '20%', height: 'calc(100vh - 140px)', backgroundColor: '#f5f5f5', padding: '10px' }}>
      <Alert severity="info">{'MFE 2 getting data from Host'}</Alert>
      <Box>
        <Button onClick={() => dispatch({ type: 'SET_USER', payload: { name: 'Amyra' } })}>Set User</Button>
        {/* {'Hello ' + user.name} */}
      </Box>
      <Box>
        {countryData[countryName] && (
          <div className="united-states-population-container">
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

