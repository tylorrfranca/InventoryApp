
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div className="w-full mt-auto">
            <footer>
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
                height={"100px"}
                >
                <Typography variant= "h5" fontWeight={"bold"} fontFamily={'mateSC'}>
                    Created by <Link href={"https://tylorrfranca.github.io/PersonalSite/"} target="blank">Tylor França</Link>
                </Typography>

                <Typography variant= "h5" fontWeight={"bold"} fontFamily={'mateSC'}>
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
            </footer>
        </div>
    );
}
export default Footer