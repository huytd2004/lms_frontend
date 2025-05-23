import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MiniSidebar from './components/sidebar/MiniSidebar';
import ToolbarSection from './components/toolbar/ToolbarSection';
import Content from './components/content/Content';
import { useTheme, useMediaQuery } from '@mui/material';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  const isTablet = useMediaQuery(theme.breakpoints.between(801, 1200));
  const isDesktop = useMediaQuery(theme.breakpoints.up(1201));
  const [isSidebarOpen, setSidebarOpen] = React.useState(!isMobile);

  const handleToggleSidebar = () => {
    // Nếu là mobile, luôn đóng lại sau toggle
    if (isMobile) {
      setSidebarOpen(prev => !prev);
    } else {
      setSidebarOpen(prev => !prev);
    }
  };

  React.useEffect(() => {
    // Đóng sidebar khi chuyển sang màn hình mobile hoặc tablet
    if (isMobile || isTablet ) setSidebarOpen(false);
    else setSidebarOpen(true);
  }, [isMobile, isTablet]);

  const shouldShowMiniSidebar = (isTablet || isDesktop) && !isSidebarOpen;
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Header onToggleSidebar={handleToggleSidebar} isMobile={isMobile} /> 
      <div className="d-flex">
        {isSidebarOpen && <Sidebar isMobile={isMobile} open={isSidebarOpen} onClose={() => setSidebarOpen(false)} onToggleSidebar={handleToggleSidebar} />}
        {shouldShowMiniSidebar && <MiniSidebar/>}
        <div className="content-wrapper" style={{ flex: 1, padding: '20px 20px 0px 20px' }}>
          <ToolbarSection />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
