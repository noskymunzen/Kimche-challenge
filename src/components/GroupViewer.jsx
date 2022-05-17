import { useState, useEffect } from 'react';
import { Text, Box, Grid, Badge } from '@chakra-ui/react';
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
    const filtered = data.countries.filter((country) =>
      country.name.toLowerCase().includes(props.search.toLowerCase())
    );
    console.log(filtered, data.countries, props);
    setGroupedCountries(groupBy(filtered, GROUPS[props.group]));
  }, [data, props.search, props.group]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {Object.keys(groupedCountries).map((groupName) => (
        <Box my="7" key={groupName}>
          <Badge as="text" fontSize="15px" mb="2">
            {groupName}
          </Badge>
          {groupedCountries[groupName].map((country) => (
            <Card
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
