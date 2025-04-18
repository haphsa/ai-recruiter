// jobs/details.js
'use client'
import React from 'react';

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Chip,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function DetailsPanel({ open, onClose, job }) {
  if (!job) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      hideBackdrop={false}
      PaperProps={{
        sx: {
          width: 800,
          backgroundColor: 'var(--primary-color)',
          padding: 2,
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',
          overflow: 'visible',
        },
      }}
    >
      {/* Slide-out tab with back arrow */}
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          left: 0,
          transform: 'translateX(-50%)',
          width: 60,
          height: 90,
          backgroundColor: 'var(--primary-color)',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
        }}
      >
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: 'black',
            paddingRight: 3,
            zIndex: 1,
                '&:hover': {
          backgroundColor: 'transparent', // removes the grey hover background
        },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Main Content */}
      <Box className="pl-8 pt-8 pr-8 flex flex-col gap-8 w-full">
        {/* Header Row */}
        <Box className="flex w-full items-start justify-between bottomline">
          {/* Left: Logo + Info */}
          <Box className="flex gap-2">
            <img
              src="/icon.png"
              alt="Company Logo"
              className="h-30 w-30 rounded mt-2"
            />
            <Box className={"pt-5"}>
              <Typography variant="h6" fontWeight="bold">
                {job.company || 'Nomad'}
              </Typography>
              <Typography variant="subtitle1">{job.title}</Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 1,
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 16, mr: 1 }} />
                {job.duration || '30 days left'}
              </Typography>
            </Box>
          </Box>

          {/* Right: Apply Button */}
          <Button
  variant="outlined"
  sx={{
    height: 40,
    borderRadius: '15px',
    textTransform: 'none',
    padding: '8px 16px',
    fontWeight: 600,
    color: 'var(--icons)',
    border: '1px solid var(--icons)',
    mt: 2,
    transition: 'background-color 0.2s ease, color 0.2s ease',
    '&:hover': {
      backgroundColor: 'var(--icons)',
      color: '#fff',
    },
  }}
>
  {job.applied ? 'Applied' : 'Apply'}
</Button>

        </Box>

        {/* Tags */}
        <Box display="flex" flexWrap="wrap" gap={1} 
>
          {job.tags?.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" sx={{
                                                                color: 'black',                
                                                                px: 1,                         
                                                                py: 1,                         
                                                                borderRadius: '15px',       
                                                                border: '2px solid black',     
                                                                fontSize: '0.875rem', 
                                                                 fontWeight: 'bold'
                                                                         
                                                              }}/>
          ))}
        </Box>
        <div>
        {/* Meta Details */}
        <Box className="flex flex-col gap-1">
          <Typography variant="body2">
            <strong>Location:</strong> {job.location}
          </Typography>
          <Typography variant="body2">
            <strong>Employment Type:</strong> {job.type}
          </Typography>
          <Typography variant="body2">
            <strong>Salary:</strong> {job.salary}
          </Typography>
        </Box>

        {/* Description */}
        <Typography variant="body1" mt={2}>
          {job.description || 'Role overview and responsibilities go here...'}
        </Typography>
        </div>
      </Box>
    </Drawer>
  );
}
