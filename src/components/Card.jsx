import { Box, Text, Badge } from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Box
      mb="3"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.100"
    >
      <Box my="2" mx="2">
        <Text as="b" fontSize="18px">
          {props.emoji} {props.name}
        </Text>
        <Box display="flex" alignItems="baseline">
          <Text mr="2">Capital: </Text>
          <Text>{props.capital}</Text>
        </Box>
        <Text>Languages:</Text>
        {props.languages.map((language) => (
          <Badge mr="2" colorScheme="purple">
            {language.name}
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default Card;
