import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";

import { Eye, EyeOff, Handbag } from "lucide-react";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login.png')" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "50px",
        }}
      >
        {/* Text */}
        <Box
          sx={{
            width: "350px",
            marginLeft: "20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              color: "#0f172a",
              marginBottom: "15px",
            }}
          >
            Shop Smarter,
            <br />
            Live Better
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Login to access your orders, save your favorite items.
          </Typography>
        </Box>

        {/* Login Form */}
        <Box
          sx={{
            width: "450px",
            backgroundColor: "#FCFCFC",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",

            "&:hover": {
              transform: "scale(1.06)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            },
          }}
        >
          {/* Logo */}
          <div className="mb-4 flex shrink-0 items-center justify-center gap-3">
            <Handbag className="h-6 w-6" />

            <p className="text-xl font-bold text-black">Shopio</p>
          </div>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              color: "#0f172a",
              marginBottom: "8px",
            }}
          >
            Welcome back
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Login to your Shopio account
          </Typography>

          {/* Email */}
          <TextField fullWidth label="Email" type="email" margin="normal" />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            margin="normal"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Remember me */}
          <FormControlLabel control={<Checkbox />} label="Remember me" />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              marginTop: "15px",
              padding: "12px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
