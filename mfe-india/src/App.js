import React, { useContext } from "react";
import { Box, Card, Button } from "@mui/material";
import { CommonContext } from "host/context/CommonContext";
import { store } from 'host/store';
import { useSelector, useDispatch } from 'react-redux';

export default function () {
  const dispatch = useDispatch();
  store.subscribe(() => console.log(store.getState()));
  const user = useSelector((state) => state.user);
  console.log('MFE State user 11:', user);

  console.log('MFE Store:', store.getState()?.user?.name);

  return (
    <Card sx={{ width: '20%', height: '100%' }}>
      <Box>
        <Button onClick={() => dispatch({ type: 'SET_USER', payload: { name: 'Amyra' } })}>Set User</Button>
        {'Hello ' + user.name}
      </Box>
    </Card>
  );
}

