
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                fontSize={""}
                display={'flex'}
                flexDirection={'row'}
                gap={2}>
                    <Link href={"https://github.com/tylorrfranca"}>
                    <GitHubIcon 
                    fontSize="large"
                    sx={{
                        ":hover":{
                            color:"white"
                        }
                    }}/></Link> 
                    
                    <Link href={"https://www.linkedin.com/in/tylorfrancapires-949254179/"}>
                        <LinkedInIcon
                        fontSize="large"
                        sx={{
                            ":hover":{
                                color:"white"
                            }
                        }}/>
                    </Link>
                </Box>
            

                </Box>
            </header>
        </div>
    );
}
export default Header