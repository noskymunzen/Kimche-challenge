import { Stack, Wrap, WrapItem, Button, Box, Text } from '@chakra-ui/react';

const ButtonGroup = (props) => {
  return (
    <Box display="flex" alignItems="baseline">
      <Text mr="3" textColor="white">
        Group By:
      </Text>
      <Stack direction="column">
        <Wrap spacing={4}>
          {props.options.map((option) => (
            <WrapItem key={option.value}>
              <Button
                color={option.color}
                variant={
                  option.value === props.selectedOption ? 'solid' : 'outline'
                }
                onClick={(e) => props.onClick(option.value)}
              >
                {option.field}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </Box>
  );
};

export default ButtonGroup;
