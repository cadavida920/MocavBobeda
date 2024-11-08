import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import * as XLSX from 'xlsx';

function UploadClients() {
    const [clients, setClients] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                const data = evt.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setClients(jsonData);
            };
            reader.readAsBinaryString(file);
        }
    };

    return (
        <Box sx={{ 
            p: 4, 
            maxWidth: 600,
            width: '90%',
            backgroundColor: '#f5f5f5',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            mt: 5,
            mx: 'auto',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-4px)'
            }
        }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 3 
            }}>
                <Typography 
                    variant="h5" 
                    sx={{
                        fontWeight: 600,
                        color: '#2c3e50',
                        mb: 2
                    }}
                >
                    Cargar Excel de Clientes
                </Typography>
                <Button 
                    variant="contained" 
                    component="label"
                    sx={{
                        backgroundColor: '#3498db',
                        padding: '12px 24px',
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        '&:hover': {
                            backgroundColor: '#2980b9'
                        }
                    }}
                >
                    Subir Excel
                    <input type="file" accept=".xlsx, .xls" hidden onChange={handleFileUpload} />
                </Button>
            </Box>
            {clients.length > 0 && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Clientes Cargados:</Typography>
                    <ul>
                        {clients.map((client, index) => (
                            <li key={index}>{client.Nombre}</li>
                        ))}
                    </ul>
                </Box>
            )}
        </Box>
    );
}

export default UploadClients;