import { useQuery } from '@tanstack/react-query';
import { PlaceModel } from '../models/place-model';
import { client } from './api-service';

async function fetchListPlace(): Promise<PlaceModel[]> {
  const result = await client.get('List_place_malang_batu.json');
  return result.data;
}

const UseListPlace = () => useQuery({queryKey: ['listPlace'], queryFn: () => {
  return fetchListPlace();
}});

export default UseListPlace;