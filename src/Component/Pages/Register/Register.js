import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
import classes from "../../../StyleContainer/Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const promoCode = [];

  return (
    <Box style={{ backgroundColor: "#284a5e" }}>
      <p>hello</p>
      <Box className={classes.mainContainer}>
        <Box className={classes.container}>
          <Box className={classes.firstInner}>
            <Box className={classes.hiddenContainer}>
              <Box>
                <p className={classes.firstText}>THE BOLD</p>
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
              <PhoneInput
                className={classes.input}
                inputStyle={{ width: "100%" }}
                country={"in"}
              />

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
                className={classes.input}
                size="small"
                disablePortal
                id="combo-box-demo"
                options={promoCode}
                renderInput={(params) => (
                  <TextField
                    placeholder="Select Location"
                    size="small"
                    {...params}
                  />
                )}
              />
              <Box className={classes.buttonContainer}>
                <Button
                  className={classes.btn}
                  sx={{
                    width: "100%",
                    backgroundColor: "#26A16C",
                    color: "#F5F5F5",
                    borderRadius: "12px",
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
                    navigate("/");
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
          <Box className={classes.registerContainer}>
            <p className={classes.rightHome}>Home</p>
            <p className={classes.rightContact}>Contact</p>
          </Box>
          <Box className={classes.textContainer}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className={classes.msg}>BOLD!</p>
              <p style={{ color: "#cccccc" }} className={classes.msg}>
                BEHOLD!
              </p>
              <p style={{ color: "#cccccc" }} className={classes.msg}>
                UNTOLD!
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
