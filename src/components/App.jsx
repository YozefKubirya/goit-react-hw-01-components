import user from '../assets/user.json'
import data from '../assets/data.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <>
      На шо я жмякав в цьому React?
      <Profile
  key={user.tag}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /> 
      <Statistics
        title="Upload stats"
        stats={data} />
      {/* <Statistics
        stats={data} /> */}
    </>
  );
};
// lkzxcjlkdsclkdmclkdsmcl