import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";

import { Eye, EyeOff, Handbag, MoveRight } from "lucide-react";
import { useState } from "react";
import { useForm , SubmitHandler  } from "react-hook-form"
import { UserInputs } from "../utilities/types/userInterface";
import { LOGIN_USER } from "../api/login";



function Login() {
  const [showPassword, setShowPassword] = useState(false);
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInputs>()
  const submitHandler: SubmitHandler<UserInputs> = async(data) => {
    const res = await LOGIN_USER(data);
    
  }

  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",

          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          },

          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },

          gap: {
            xs: "25px",
            sm: "30px",
            md: "35px",
            lg: "50px",
          },

          padding: {
            xs: "30px 20px",
            sm: "40px 30px",
            md: "40px 40px",
            lg: "40px",
          },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,

            width: {
              xs: "100%",
              sm: "100%",
              md: "280px",
              lg: "350px",
            },

            maxWidth: {
              xs: "450px",
              sm: "500px",
              md: "280px",
              lg: "350px",
            },

            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },

            marginLeft: {
              xs: 0,
              md: 0,
              lg: "20px",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              color: "#0f172a",
              marginBottom: "15px",

              fontSize: {
                xs: "30px",
                sm: "34px",
                md: "38px",
                lg: "48px",
              },

              lineHeight: 1.2,
            }}
          >
            Shop Smarter,
            <br />
            Live Better
          </Typography>

          <Typography
            sx={{
              color: "#64748b",

              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "15px",
                lg: "17px",
              },

              lineHeight: 1.7,
            }}
          >
            Login to access your orders, save your favorite items.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(submitHandler)}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "380px",
              lg: "430px",
            },

            maxWidth: {
              xs: "450px",
              sm: "500px",
              md: "380px",
              lg: "430px",
            },

            boxSizing: "border-box",

            backgroundColor: "#FCFCFC",

            border: "1px solid #e2e8f0",

            borderRadius: "16px",

            padding: {
              xs: "25px 20px",
              sm: "30px",
              md: "30px",
              lg: "40px",
            },

            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",

            transition: "all 0.3s ease",

            "&:hover": {
              transform: {
                xs: "none",
                sm: "none",
                md: "scale(1.02)",
              },

              boxShadow: {
                xs: "0 10px 30px rgba(0,0,0,0.05)",
                md: "0 15px 35px rgba(0,0,0,0.1)",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <Handbag size={24} />

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#000",
              }}
            >
              Shopio
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              color: "#0f172a",
              marginBottom: "8px",

              fontSize: {
                xs: "26px",
                sm: "28px",
                md: "30px",
                lg: "32px",
              },
            }}
          >
            Welcome back
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "20px",

              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "14px",
                lg: "16px",
              },
            }}
          >
            Login to your Shopio account
          </Typography>

          <TextField
            fullWidth
            required
            label="UserName"
            type="username"
            margin="normal"
            {...register("username")}
            
          />

          <TextField
            fullWidth
            required
            label="Password"
            type={showPassword ? "text" : "password"}
            margin="normal"
            {...register("password")}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </InputAdornment>
                ),
              },
            }}
          />

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: "15px",
              padding: "12px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              gap: "4px",
            }}
          >
            Login
            <MoveRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
