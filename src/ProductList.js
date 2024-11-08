import React from 'react';
import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import './styles/shared.css';

const ProductList = () => {
  // Datos de ejemplo
  const initialProducts = [
    {
      id: 1,
      image: 'https://picsum.photos/150',
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      tags: ['nuevo', 'oferta'],
      quantity: 10
    },
    // ... más productos
  ];

  const [products, setProducts] = React.useState(initialProducts);

  const [open, setOpen] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState({
    name: '',
    description: '',
    quantity: '',
    tags: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const product = {
      id: products.length + 1,
      image: 'https://picsum.photos/150',
      ...newProduct,
      tags: newProduct.tags.split(',').map(tag => tag.trim()),
      quantity: parseInt(newProduct.quantity)
    };
    
    // Aquí agregarías la lógica para guardar en tu backend
    products.push(product);
    
    setNewProduct({
      name: '',
      description: '',
      quantity: '',
      tags: ''
    });
    handleClose();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="subtitle1" component="h1" sx={{ fontWeight: 'bold' }}>
          Productos
        </Typography>
        <Button
          onClick={handleOpen}
          variant="contained"
          startIcon={<AddIcon />}
          className="primary-button"
        >
          Agregar Producto
        </Button>
      </Box>

      <Stack spacing={2}>
        {products.map((product) => (
          <Card 
            key={product.id}
            className="card-hover rounded-corners"
            sx={{
              display: 'flex',
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 140, height: 140 }}
              className="rounded-corners"
              image={product.image}
              alt={product.name}
            />
            <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {product.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {product.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      className="chip-tag"
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2">
                  Cantidad: {product.quantity}
                </Typography>
                <IconButton color="primary">
                  <AddCircleIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{
          className: "rounded-corners"
        }}
      >
        <DialogTitle>Agregar Nuevo Producto</DialogTitle>
        <DialogContent className="modal-content">
          <Box className="form-stack">
            <TextField
              name="name"
              label="Nombre del Producto"
              value={newProduct.name}
              onChange={handleInputChange}
              fullWidth
              className="rounded-corners"
            />
            <TextField
              name="description"
              label="Descripción"
              value={newProduct.description}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
              className="rounded-corners"
            />
            <TextField
              name="quantity"
              label="Cantidad"
              type="number"
              value={newProduct.quantity}
              onChange={handleInputChange}
              fullWidth
              className="rounded-corners"
            />
            <TextField
              name="tags"
              label="Etiquetas (separadas por comas)"
              value={newProduct.tags}
              onChange={handleInputChange}
              fullWidth
              helperText="Ejemplo: nuevo, oferta, destacado"
              className="rounded-corners"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            className="primary-button"
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductList;
