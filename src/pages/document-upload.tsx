import { UrlsInput } from '@/interfaces/database';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { neon } from '@neondatabase/serverless';
import { upload } from '@vercel/blob/client';
import React, { ChangeEvent, useState } from 'react';

const sql = neon(import.meta.env.VITE_DB_URL);

interface DocumentUploadProps {
  label: string;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ label }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (file) {
      const newFile = await upload(label, file, {
        access: 'public',
        handleUploadUrl: ' /api/upload',
      });
      setUploadedUrl(newFile.url);
      const dbUrl : UrlsInput = {
        url: newFile.url,
        description: label,
      };
      await sql`INSERT INTO urls (url, description) VALUES (${dbUrl.url}, ${dbUrl.description})`;
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewUrl(null);
    setUploadedUrl(null);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h6">{label}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="150px"
            border="1px dashed grey"
            borderRadius={2}
            bgcolor="grey.100"
          >
            {previewUrl ? (
              <img src={previewUrl} alt="Document Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            ) : (
              <Typography variant="body2">Document Preview</Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="contained" component="label">
              Choose File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <Button variant="contained" color="success" onClick={handleUpload} disabled={!file}>
              Upload
            </Button>
            <Button variant="outlined" color="error" onClick={handleRemove} disabled={!file}>
              Remove Upload
            </Button>
          </Box>
        </Grid>
      </Grid>
      {uploadedUrl && (
        <Typography variant="body2" color="primary">
          File uploaded to: <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">{uploadedUrl}</a>
        </Typography>
      )}
    </Paper>
  );
};

export default DocumentUpload;
