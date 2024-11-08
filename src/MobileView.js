import React, { useState } from 'react';
import { Box, IconButton, Paper, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function MobileView() {
  const [selectedImages, setSelectedImages] = useState([]);
  
  // Array de imágenes con diferentes IDs
  const images = [
    'https://picsum.photos/150/150?random=1',
    'https://picsum.photos/150/150?random=2',
    'https://picsum.photos/150/150?random=3',
    'https://picsum.photos/150/150?random=4',
    'https://picsum.photos/150/150?random=5',
  ];

  const handleImageSelect = (image) => {
    if (!selectedImages.includes(image) && selectedImages.length < 3) {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const handleImageRemove = (imageToRemove) => {
    setSelectedImages(selectedImages.filter(img => img !== imageToRemove));
  };

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      {/* Carrusel de imágenes */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        style={{ 
          marginBottom: 2,
          '--swiper-navigation-color': '#000',
          '--swiper-navigation-size': '25px',
          '__swiper-navigation-sides-offset': '42px'
        }}

      >
        {images.map((image, index) => (
          <SwiperSlide 
            key={index} 
            style={{ 
              width: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60vh'
            }}
          >
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              style={{ 
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
              onClick={() => handleImageSelect(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contenedor de miniaturas y botón */}
      <Box sx={{
        display: 'flex',
        gap: 2,
        mt: 2,
        justifyContent: 'center'
      }}>
        {/* Miniaturas de imágenes seleccionadas */}
        {selectedImages.map((image, index) => (
          <Paper
            key={index}
            sx={{
              position: 'relative',
              width: 80,
              height: 80
            }}
          >
            <img
              src={image}
              alt={`Seleccionada ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <IconButton
              size="small"
              sx={{
                position: '100%',
                top: -8,
                right: -8,
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#e0e0e0' }
              }}
              onClick={() => handleImageRemove(image)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Paper>
        ))}
        
        
      </Box>
      {selectedImages.length === 3 && (
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => console.log('Ordenar imágenes')}
          >
            Ordenar
          </Button>
        )}
    </Box>
  );
}

export default MobileView;