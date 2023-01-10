import { useQuery } from 'react-query';

const FetchedJoke = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '2bbc8266d0msh568f261ff207c7fp154903jsnf94aecca07d4',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    },
  };

  const getJoke = async () => {
    const res = await fetch(
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      options
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery('chuckNorrisJoke', getJoke);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p className='font-bold text-2xl'>
        Here's your Chuck Norris joke, enjoy:
      </p>
      <p>{data.value}</p>
    </div>
  );
};

export default FetchedJoke;
