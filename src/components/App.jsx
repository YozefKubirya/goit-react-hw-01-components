import user from '../assets/user.json'
import { Profile } from './Profile/Profile';
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
    </>
  );
};
// lkzxcjlkdsclkdmclkdsmcl