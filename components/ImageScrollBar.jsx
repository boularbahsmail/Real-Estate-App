import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrevious } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrevious()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginLeft="1">
            <Icon 
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}


const ImageScrollBar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
        {data.map((item) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
                <Image 
                alt="Property"
                    placeholder="blur" 
                    blurDataURL={item.url} 
                    src={item.url} 
                    width={1000} 
                    height={500} 
                    sisez="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
            </Box>
        ))}
    </ScrollMenu>
);

export default ImageScrollBar;