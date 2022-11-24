import { PlaceModel } from '../models/place-model';

export type RootStackParamList = {
  Splash: undefined;
  ListPlace: undefined;
  DetailPlace: PlaceModel;
};
