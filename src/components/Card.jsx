import { Box, Text } from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Text>{props.name}</Text>
    </Box>
  );
};

export default Card;
