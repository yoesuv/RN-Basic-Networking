import { useQuery } from 'react-query';
import { Place } from '../models/Place';

const fetchList = async () => {
  const result = await fetch('https://info-malang-batu.firebaseapp.com/List_place_malang_batu.json');
  return result.json();
}

const UseList = () => useQuery<Place[], Error>('listPlace', fetchList);

export default UseList;
