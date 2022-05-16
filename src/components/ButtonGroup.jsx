import { Stack, Wrap, WrapItem, Button } from '@chakra-ui/react';

const ButtonGroup = (props) => {
  return (
    <Stack direction="column">
      <Wrap spacing={4}>
        {props.options.map((option) => (
          <WrapItem key={option}>
            <Button
              colorScheme={option.color}
              variant={
                option.value === props.selectedOption ? 'solid' : 'outline'
              }
              onClick={(e) => props.onClick(option.value)}
            >
              {option.value}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

export default ButtonGroup;
