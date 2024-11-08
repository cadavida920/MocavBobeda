import React from 'react';
import { TextField, IconButton, Box, Card, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import LinkIcon from '@mui/icons-material/Link';

function UserList() {
  const users = [
    { 
      name: 'Juan David', 
      phone: '573128477014',
      notified: true 
    },
    { 
      name: 'Ana Martinez', 
      phone: '+34 623456789',
      notified: false 
    },
    { 
      name: 'Luisa Maria', 
      phone: '+34 634567890',
      notified: true 
    },
  ];

  return (
    <Box sx={{ p: 3, border: '1px solid #000', borderRadius: 2 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          placeholder="Buscar por nombre"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{ flexGrow: 1, mr: 1 }}
        />
        <IconButton 
          color="success" 
          component="a" 
          href="https://web.whatsapp.com/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>

      <Box sx={{ border: '1px solid #000', borderRadius: 2, p: 1 }}>
        <Card sx={{ display: 'flex', alignItems: 'center', mb: 1, p: 1, bgcolor: '#f5f5f5' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, gap: 2, alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ width: '200px', fontWeight: 'bold' }}>Nombre</Typography>
            <Typography variant="subtitle1" sx={{ width: '150px', fontWeight: 'bold' }}>Teléfono</Typography>
            <Typography variant="subtitle1" sx={{ width: '100px', fontWeight: 'bold' }}>Notificado</Typography>
          </Box>
          <Box sx={{ width: '96px' }}>{/* Espacio para los botones */}</Box>
        </Card>

        {users.map((user, index) => (
          <Card key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1, p: 1 }}>
            <Box sx={{ display: 'flex', flexGrow: 1, gap: 2, alignItems: 'center' }}>
              <Typography variant="body1" sx={{ width: '200px' }}>{user.name}</Typography>
              <Typography variant="body2" sx={{ width: '150px' }}>{user.phone}</Typography>
              <Box sx={{ width: '100px' }}>
                {user.notified ? 
                  <CheckCircleIcon color="success" /> : 
                  <CancelIcon color="error" />
                }
              </Box>
            </Box>
            <IconButton 
              color="success" 
              component="a" 
              href={`https://wa.me/${user.phone.replace(/\s+/g, '')}?text=${encodeURIComponent('¡Hola! Te invito a unirte a nuestro grupo. www.grupos.com/12lkj32l')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton 
              color="primary"
              onClick={() => console.log(`Generar link para ${user.name}`)}
            >
              <LinkIcon />
            </IconButton>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default UserList;
