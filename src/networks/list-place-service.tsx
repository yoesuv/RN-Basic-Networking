import { useQuery } from 'react-query';
import { PlaceModel } from '../models/place-model';
import { client } from './api-service';

const fetchListPlace = async () => {
  const result = await client.get<PlaceModel[]>('List_place_malang_batu.json');
  return result.data;
}

const UseListPlace = () => useQuery<PlaceModel[], Error>('listPlace', fetchListPlace);

export default UseListPlace;
