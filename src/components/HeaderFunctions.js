import MuiAppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 17;   //Se ha cambiado la unidad de PX a REM para que sea responsive

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}rem`,
    width: `${drawerWidth}rem`,
    paddingRight: '1.5rem', // margen derecho de los charts
    paddingBottom: '0',
    overflowY: 'hidden',
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


//Div para mantener el margen con el AppBar
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export { AppBar , Main, DrawerHeader, Drawer }