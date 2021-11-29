import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.500" borderTop="1px" borderColor="gray.100">
        &copy; 2021 - Realrot - 
        <Link href="https://twitter.com/boularbahsmail" target="_blank">
            <Text 
                color="blue.300" 
                cursor="pointer" 
                title="Twitter" 
                fontWeight="bold"
                >
                Ismailium
            </Text>
        </Link>
    </Box>
);

export default Footer;