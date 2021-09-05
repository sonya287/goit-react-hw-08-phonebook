import Loader from 'react-loader-spinner';
import { spinner } from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <Loader
      className={spinner}
      type="Bars"
      color="#00BFFF"
      height={50}
      width={100}
    />
  );
};
