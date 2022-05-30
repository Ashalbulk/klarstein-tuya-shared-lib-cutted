import { useSelector } from 'react-redux';

export const useCurrentHubRole = () => {
  const currentHub = useSelector(state => state.home.hubs.list.currentHub);
  return currentHub?.role;
};
