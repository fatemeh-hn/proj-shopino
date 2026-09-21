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
          justifyContent: "flex-start",
          paddingLeft: "120px",
        }}
      >
        {/* Login Form */}
        <Box
          sx={{
            width: "450px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "40px",

            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex shrink-0 items-center justify-center gap-3 mb-4">
            <Handbag className="h-6 w-6" />

            <p className="text-xl font-bold text-black">Shopio</p>
          </div>
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

          <Typography
            sx={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Login to your Shopio account
          </Typography>

          <TextField fullWidth label="Email" type="email" margin="normal" />

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

          <FormControlLabel control={<Checkbox />} label="Remember me" />

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
