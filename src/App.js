import React from 'react';
import UserList from './UserList';
import UploadClients from './UploadClients';
import ProductList from './ProductList';
import MobileView from './MobileView';
import OrderList from './OrderList';
import { Box, Tabs, Tab } from '@mui/material';

function App() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Tabs 
        value={currentTab} 
        onChange={handleChange} 
        centered
        sx={{
          width: '100%',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Tab label="Lista de Usuarios" />
        <Tab label="Cargar Clientes" />
        <Tab label="Productos" />
        <Tab label="Vista desde móvil" />
        <Tab label="Pedidos" />
      </Tabs>
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        {currentTab === 0 && <UserList />}
        {currentTab === 1 && <UploadClients />}
        {currentTab === 2 && <ProductList />}
        {currentTab === 3 && <MobileView />}
        {currentTab === 4 && <OrderList />}
      </Box>
    </Box>
  );
}

export default App;