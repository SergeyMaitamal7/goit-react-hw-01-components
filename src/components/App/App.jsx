import profile from '../../Data/user.json';
import statistics from '../../Data/data.json';
import friends from '../../Data/friends';
import transactions from '../../Data/transactions.json';
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
