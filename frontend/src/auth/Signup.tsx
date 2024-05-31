import React, { useState } from "react";
import { Typography, TextField, Button, styled } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { API_URL } from "../Env";
import { LoadingButton } from "@mui/lab";
import { useCookies } from "react-cookie";

const Signup = () => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const data = {
    firstName,
    lastName,
    farmName,
    email,
    password,
  };

  const signup = async () => {
    const config = { headers: { "Content-type": "application/json" } };
    try {
      setLoading(true);
      const response = await axios.post(
        `/api/register`,
        data,
        config
      );
      console.log(response.data);

      if (response.data.message === "success") {
        navigate("/dashboard");
        setCookies("email", response.data.data.email);
        setCookies("farm", response.data.data.farmName);
        setCookies("id", response.data.data._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CustomButton = styled(Button)({
    backgroundColor: "#30D42B",
    borderColor: "#30D42B",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1F9D21",
      color: "white",
    },
  });

  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-center">
      <div className="m-5 w-[46rem] h-[46rem] bg-[#DFE1DE] rounded-[4rem] text-center">
        <div className="flex justify-center ">
          <div className="w-[21rem] h-[41rem]">
            <Typography variant="h3" className="pt-[5rem]">
              Sign Up
            </Typography>
            <Typography variant="body2">
              Create an account to get started
            </Typography>

            <div className="flex flex-col gap-3 mt-7 mx-5">
              <TextField
                variant="filled"
                label="First name"
                type="text"
                size="small"
                className="bg-[#F5F6F5]"
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      color: "#30D42B",
                    },
                  },
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Last name"
                type="text"
                size="small"
                className="bg-[#F5F6F5]"
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      color: "#30D42B",
                    },
                  },
                }}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Farm name"
                type="text"
                size="small"
                className="bg-[#F5F6F5]"
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      color: "#30D42B",
                    },
                  },
                }}
                onChange={(e) => setFarmName(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Email"
                type="email"
                size="small"
                className="bg-[#F5F6F5]"
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      color: "#30D42B",
                    },
                  },
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Password"
                type="password"
                size="small"
                className="bg-[#F5F6F5]"
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      color: "#30D42B",
                    },
                  },
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col mt-11  mx-5">
              {loading ? (
                <div className="flex justify-center">
                  <LoadingButton
                    loading
                    loadingIndicator="Signing up…"
                    variant="outlined"
                    fullWidth
                    sx={{ textTransform: "capitalize" }}
                  >
                    Fetch data
                  </LoadingButton>
                </div>
              ) : (
                <CustomButton
                  variant="contained"
                  disableElevation
                  onClick={signup}
                >
                  Sign Up
                </CustomButton>
              )}
            </div>

            <div className="flex items-center mt-3.5 mx-5">
              <hr className="flex-1 border-t border-[#747574]" />
              <span className="px-2">or</span>
              <hr className="flex-1 border-t border-[#747574]" />
            </div>

            <div className="flex flex-col mt-3.5  mx-5">
              <CustomButton
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#CFD2CD",
                  color: "#30D42B",
                  "&:hover": {
                    backgroundColor: "#B6B9B6",
                    color: "#1F9D21",
                  },
                }}
                startIcon={<FcGoogle />}
              >
                <Typography className="text-lg">
                  Continue with Google
                </Typography>
              </CustomButton>
            </div>

            <div>
              <Typography variant="body1" className="pt-2 text-[#747574]">
                Have an account?{" "}
                <span
                  className="text-[#30D42B] hover:cursor-pointer hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
