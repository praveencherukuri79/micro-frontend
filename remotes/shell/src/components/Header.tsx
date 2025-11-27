import { Brightness4, Brightness7, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

interface HeaderProps {
  themeMode?: 'light' | 'dark';
  cartCount?: number;
  onToggleTheme?: () => void;
  onNavigate?: (path: string) => void;
}

export const Header = ({ 
  themeMode = 'light', 
  cartCount = 0, 
  onToggleTheme, 
  onNavigate 
}: HeaderProps) => {
  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 0, mr: 4, cursor: 'pointer', fontWeight: 700 }}
          onClick={() => handleNavigation('/')}
        >
          ModuleFed Store 22
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => handleNavigation('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/products')}>
            Products
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/angular-webpack')}>
            Angular (WP)
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/angular-vite')}>
            Angular (Vite)
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/vue')}>
            Vue
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/contact')}>
            Contact
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          
          <IconButton onClick={onToggleTheme} color="inherit">
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

