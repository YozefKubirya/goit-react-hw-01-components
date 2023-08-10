import user from '../assets/user.json'
import data from '../assets/data.json'
import friends from '../assets/friends.json'
import transactions from '../assets/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory /TransactionHistory';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
// lkzxcjlkdsclkdmclkdsmcl