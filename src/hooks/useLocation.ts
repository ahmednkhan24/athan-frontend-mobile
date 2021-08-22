import { useSelector, useDispatch } from 'react-redux';
import { calculateCoordinates } from '../store/actions';
import type { UseLocation, RootState } from '../types';

export const useLocation: UseLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector(({ location }: RootState) => location);
  const recalculateLocation = () => dispatch(calculateCoordinates());

  return { location, recalculateLocation };
};
