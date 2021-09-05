import { title } from './HomeView.module.scss';
const clsses = `container ${title}`;
const HomeView = () => (
  <div className={clsses}>
    <h1>Welcome to Phonebook</h1>
  </div>
);

export default HomeView;
