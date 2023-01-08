import profile from '../data/user.json';
import statistics from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions.json';
import { Profile } from '../profile/Profile';
import { StatisticsList } from '../statistics/StatisticsList';
import { FriendList } from '../friends/FriendList';
import { TransactionHistory } from '../transactions/TransactionHistory';
console.log(profile);
console.log(statistics);
console.log(friends);
console.log(transactions);
export const App = () => {
  return (
    <>
      <Profile profile={profile} />
      <StatisticsList statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
