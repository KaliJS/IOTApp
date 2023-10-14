import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase, Divider, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => {}} component={Link} to={config.defaultPath}>
      <Typography variant="h1">IOT App</Typography>
      <Divider />
    </ButtonBase>
  );
};

export default LogoSection;
