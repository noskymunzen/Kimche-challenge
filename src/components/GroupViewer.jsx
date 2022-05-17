import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Badge,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../services/countries';
import { groupBy } from '../helpers/array.helpers';
import { GROUPS } from '../core/groups';
import Card from './Card';

const GroupViewer = (props) => {
  const [groupedCountries, setGroupedCountries] = useState({});

  const { data, loading, error } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    if (!data || !data.countries) {
      return;
    }
    const compareSearchName = (country) =>
      country.name.toLowerCase().includes(props.search.toLowerCase());

    const filtered = data.countries.filter(compareSearchName);

    setGroupedCountries(groupBy(filtered, GROUPS[props.group]));
  }, [data, props.search, props.group]);

  if (loading) return 'Loading...';
  if (error)
    return (
      <Alert mt="7" status="error">
        <AlertIcon />
        <AlertTitle>API response Error!</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {Object.keys(groupedCountries).map((groupName) => (
        <Box my="7" key={groupName}>
          <Badge fontSize="15px" mb="2">
            {groupName}
          </Badge>
          {groupedCountries[groupName].map((country) => (
            <Card
              key={country.name}
              name={country.name}
              capital={country.capital}
              emoji={country.emoji}
              languages={country.languages}
            />
          ))}
        </Box>
      ))}
    </Grid>
  );
};

export default GroupViewer;
