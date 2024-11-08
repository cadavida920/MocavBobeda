import React from 'react';
import {
  Box,
  Card,
  Typography,
  Chip,
  Stack,
  Avatar,
  Divider
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function OrderList() {
  const orders = [
    {
      id: 1,
      client: {
        name: 'Sandra Maria',
        phone: '+34 612345678'
      },
      date: '2024-03-20',
      status: 'pendiente',
      products: [
        { name: 'Producto 1', quantity: 2, price: 29.99 },
        { name: 'Producto 2', quantity: 1, price: 49.99 },
        { name: 'Producto 3', quantity: 3, price: 15.99 }
      ]
    },
    {
      id: 2,
      client: {
        name: 'Ana Martinez',
        phone: '+34 623456789'
      },
      date: '2024-03-19',
      status: 'completado',
      products: [
        { name: 'Producto 4', quantity: 1, price: 39.99 },
        { name: 'Producto 5', quantity: 2, price: 25.99 },
        { name: 'Producto 6', quantity: 1, price: 19.99 }
      ]
    }
  ];

  const getStatusColor = (status) => {
    return status === 'completado' ? 'success' : 'warning';
  };

  const calculateTotal = (products) => {
    return products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Lista de Pedidos
      </Typography>

      <Stack spacing={2}>
        {orders.map((order) => (
          <Card key={order.id} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <ShoppingBagIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {order.client.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order.client.phone}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Chip 
                  label={order.status}
                  color={getStatusColor(order.status)}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography variant="body2">
                  Fecha: {order.date}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={1}>
              {order.products.map((product, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body2">
                    {product.name} x{product.quantity}
                  </Typography>
                  <Typography variant="body2">
                    {product.price * product.quantity}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default OrderList; 