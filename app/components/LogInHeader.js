
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Link from "next/link";
const Header = () => {
    return (
        <div className="w-full mt-auto">
            <header>
                <Box
             
                bgcolor={"#4184f0"}
                width={"full"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={'center'}
                justifyContent={'space-between'}
                color={"black"}
                padding = {5}
                gap={'auto'}
                height={"150px"}
                >
                    <Box>
                        
                    </Box>
                <Typography variant= "h2" fontFamily={'mateSC'}>
                    Simple Inventory Tracking Application
                </Typography>
                
                <Box
                
                color={"black"}
                height={'110px'}
                width={"250px"}
                fontSize={""}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={2}
                bgcolor={"white"}
                borderRadius={4}
                padding={3}>

                <Box
                display={'flex'}
                justifyContent={'center'}
                flexDirection={'row'}
                gap={2}>
                    <Button variant="contained" href="#contained-buttons">
                        Log In
                    </Button>

                    
                        <Button variant="outlined" href="/signuppage">
                        Sign Up
                        </Button>
                   
                </Box>
                    <Typography varient = "h6" fontFamily={"mateSc"}>Log In to Save Results</Typography>
                </Box>
            

                </Box>
            </header>
        </div>
    );
}
export default Header