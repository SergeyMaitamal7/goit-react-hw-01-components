import profile from '../../Data/user.json';
import statistics from '../../Data/data.json';
import friends from '../../Data/friends';
import transactions from '../../Data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendsList/FriendList';
import { TransactionHistory } from '../TransactionsHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile profile={profile} />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
