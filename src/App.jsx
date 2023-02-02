
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json'
import transactions from './data/transactions.json';

import Profile from './components/Profile/Profile';
import  Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
// or <Profile {...user} />

function App() {
    return (
        <>
         <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />
           <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />;
            <TransactionHistory items={transactions} />
        </> 
    );
};

export default App;