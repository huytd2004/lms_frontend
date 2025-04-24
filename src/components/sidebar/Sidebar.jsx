import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from '../../data/data.js'; // Import menu items từ data.js
const Sidebar = ({ isMobile = false, open = true,onClose, onToggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('Học phần');

  return (
    <>
      {/* Màn hình xám khi sidebar mở trên màn hình nhỏ */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1200,
          }}
          onClick={onClose} // Đóng sidebar khi click ngoài
        />
      )}
      <Box
        sx={{
          width: 250,
          height: '100vh',
          position: isMobile ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          pt: isMobile ? 0 : 2,
          zIndex: isMobile ? 1300 : 'auto',
          transform: isMobile ? (open ? 'translateX(0)' : 'translateX(-100%)') : 'none',
          transition: isMobile ? 'transform 0.3s ease-in-out' : 'none',
          overflow: 'hidden', // Quan trọng: ẩn phần tràn
          height: 'fit-content', // Quan trọng: co lại theo nội dung
        }}
        // onClick={isMobile ? onClose : undefined} // click ngoài box thì đóng
      >
        {/* Sidebar chính */}
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: isMobile ? 0 : 2,
            p: 2,
            pt: 4,
            height: '100%',
            width: 250,
            boxShadow: 3,
          }}
          onClick={(e) => e.stopPropagation()} // tránh đóng khi click vào trong box
        >
          {/* Sidebar Toggle + Logo chỉ hiển thị ở chế độ mobile */}
          {isMobile && (
            <Box display="flex" alignItems="center" gap={2} mb={2} sx={{ backgroundColor: '#c62828', mx: -2, mt: -4, p: 2}}>
              <IconButton color="inherit" onClick={onToggleSidebar} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
              <img src="/logo_hust.webp" alt="Logo" style={{ height: 40 }} />
            </Box>
          )}

          {menuItems.map((section, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              {section.group && (
                <Typography variant="body2" color="textSecondary" sx={{ px: 1, mb: 1 }}>
                  {section.group}
                </Typography>
              )}
              <List disablePadding>
                {section.items.map((item) => (
                  <ListItem
                    key={item.text}
                    button
                    onClick={() => {
                      setActiveItem(item.text);
                      if (isMobile && onClose) onClose(); // đóng sidebar khi chọn item
                    }}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: activeItem === item.text ? '#c62828' : 'transparent',
                      color: activeItem === item.text ? '#fff' : 'text.primary',
                      '&:hover': {
                        bgcolor: activeItem === item.text ? '#b71c1c' : 'grey.100',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: activeItem === item.text ? '#fff' : '#c62828',
                        minWidth: 36,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
