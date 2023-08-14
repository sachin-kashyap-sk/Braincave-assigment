import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "../../../StyleContainer/Login.module.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const LeftSection = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const promoCode = [];

  return (
    <Box style={{ backgroundColor: "#284a5e" }}>
      <Box className={classes.mainContainer}>
        <Box className={classes.container}>
          <Box className={classes.firstInner}>
            <Box className={classes.hiddenContainer}>
              <Box>
                <p className={classes.firstText}>Kreativ</p>
              </Box>
              <Box className={classes.pages}>
                <p className={classes.homeText}>Home</p>
                <p className={classes.contactText}>Contact</p>
              </Box>
            </Box>
            <p className={classes.header}>Let’s get you started</p>
            <Box className={classes.secInner}>
              <label className={classes.labels}>Full Name</label>
              <TextField
                className={classes.input}
                placeholder="Ade Tiger"
                size="small"
                variant="outlined"
              />

              <label className={classes.labels}>Email address</label>
              <TextField
                className={classes.input}
                placeholder="yourname@email.com"
                size="small"
                variant="outlined"
                type="email"
              />

              <label className={classes.labels}>Phone number</label>
              <PhoneInput inputStyle={{ width: "100%" }} country={"in"} />

              <label className={classes.labels}>Create password</label>

              <FormControl variant="outlined">
                <OutlinedInput
                  className={classes.input}
                  size="small"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box sx={{ paddingTop: "2%" }}>
                <p className={classes.passwordChar}>
                  Password must contain a minimum of 8 characters
                </p>
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <p className={classes.passwordChar}>
                  Password must contain at least one symbol e.g. @, !
                </p>
              </Box>

              <Box className={classes.promoContainer}>
                <label className={classes.promo}>Promo Code</label>
                <label className={classes.optionalText}>(optional)</label>
              </Box>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={promoCode}
                renderInput={(params) => (
                  <TextField
                    className={classes.input}
                    placeholder="Select Location"
                    size="small"
                    {...params}
                  />
                )}
              />
              <Box className={classes.buttonContainer}>
                <Button
                  className={classes.input}
                  sx={{
                    width: "100%",
                    backgroundColor: "#284A5E",
                    color: "#ffffff",
                  }}
                  size="medium"
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
              <Box className={classes.loginContainer}>
                <p className={classes.userText}>Already a user?</p>
                <p
                  onClick={() => {
                    navigate("/Register");
                  }}
                  className={classes.loginText}
                >
                  Login
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.secContainer}>
          <Box className={classes.textContainer}>
            <Box sx={{ width: "55%" }}>
              <p className={classes.msg}>
                “Creativity is intelligence having fun”
              </p>
            </Box>
            <p className={classes.bottomText}>Albert Einstein</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LeftSection;
