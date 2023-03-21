import Stack from "@mui/material/Stack"
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";

const Loading = () => {
    return (
        <Stack>
            <Box sx={{ width: '100%' }}>
                <LinearProgress color="success"/>
            </Box>
        </Stack>
    )
}
export default Loading