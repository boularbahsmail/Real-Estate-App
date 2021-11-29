import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.500" borderTop="1px" borderColor="gray.100">
        <Text>&copy; 2021 - TajHouse - Made with ❤️ by</Text>
        <Text 
            color="blue.300" 
            cursor="pointer" 
            title="Twitter" 
            fontWeight="bold"
            >
            <Link href="https://twitter.com/boularbahsmail" passHref target="new tab">    
            Ismailium
            </Link>
        </Text>
        |
        <Text>Deployed on 
            <Text fontWeight="bold" color="black" title="Vercel">
                <Link href="https://vercel.com/" passHref target="new tab">    
                    Vercel
                </Link>
            </Text>
        </Text>
        |
        <Text>Open Source on 
            <Text fontWeight="bold" color="black" title="GitHub">
                <Link href="https://github.com/boularbahsmail/Real-Estate-App" passHref target="new tab">    
                    GitHub
                </Link>
            </Text>
        </Text>
    </Box>
);

export default Footer;