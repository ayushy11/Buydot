import Image from "next/image";
import { useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex alignItems="center" justifyContent="center" mr="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex alignItems="center" justifyContent="center" mr="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data?.map((item) => (
      <Box key={item.id} w="910px" itemId={item.id} overflow="hidden" p="1">
        <Image
          src={item.url}
          width={1000}
          height={500}
          placeholder="blur"
          blurDataURL={item.url}
          alt="property"
          sizes="(max-width:500px) 100px, (max-width:1024px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
