import profile from '../../data/user.json';
import statistics from '../../data/data.json';
import friends from '../../data/friends';
import transactions from '../../data/transactions.json';
import { ProfileUser } from '../ProfileUser/ProfileUser';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import { FriendList } from '../FriendsList/FriendList';
import { TransactionHistory } from '../TransactionsHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileUser profile={profile} />
      <StatisticsList title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
