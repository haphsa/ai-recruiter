'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Person from '@mui/icons-material/PersonOutline';
import Logout from '@mui/icons-material/Logout';
import Notifications from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginPage from './login/page';

import { IconButton, Badge } from '@mui/material';

export default function Toolbox() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleLogoutClick = () => {
    router.push('/login');
  };

 


  return (
    <div className="flex flex-row-reverse gap-4 items-center p-4">
      {/* Profile with Arrow */}
      <div className="flex items-center purpleshade rounded-[20px]  px-2 py-1">
      <img
        src="/pfp.jpg"
        alt="Profile"
        className="h-10 w-10 object-cover rounded-[20px] border-2"
        style={{ borderColor: 'var(--icons)' }}
      />


        <ArrowBackIos
          style={{
            color: 'var(--icons)',
            transform: 'rotate(270deg)',
            marginLeft: '4px',
            fontSize: '18px',
            marginBottom:'5px',
          }}
        />
      </div>

      {/* Notifications Button */}
      <IconButton
        sx={{
          borderRadius: '50%',
          backgroundColor: 'var(--purpleshade)',
          '&:hover': {
            backgroundColor: 'var(--accent)',
          },
          
          padding: '8px',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <Badge
          badgeContent={3}
          color="error"
          overlap="circular"
          sx={{ '& .MuiBadge-badge': { fontSize: '0.6rem' } }} // optional tweak
        >
          <Notifications
            sx={{
              color: 'var(--icons)', // force black
              width: 24,
              height: 24,
            }}
          />
        </Badge>

      </IconButton>

  
      {/* Logout Button */}
      <IconButton
        onClick={handleLogoutClick}
        sx={{
          borderRadius: '50%',
          
          backgroundColor: 'var(--purpleshade)',
          '&:hover': {
            backgroundColor: 'var(--accent)',
          },
          
          padding: '8px',
        }}
      >
        <Logout style={{ color: '#352b38', transform: 'scaleX(-1)' }} />
      </IconButton>

  
      
      

    </div>
  );
  
}
