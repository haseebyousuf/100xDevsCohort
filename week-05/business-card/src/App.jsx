import BusinessCard from './components/BusinessCard';

const users = [
  {
    name: 'Haseeb Yousuf',
    description: 'Full Stack Developer',
    interests: ['Web Development', 'Data Science', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/in/haseeb-yousuf-018b00199',
    twitter: 'https://twitter.com/haseebyousuf',
  },
  {
    name: 'Faizan Fayaz',
    description: 'PHP Developer',
    interests: ['Web Development', 'Data Science', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/in/faizan-fayaz-018b00199',
    twitter: 'https://twitter.com/faizanfayaz',
  },
  {
    name: 'Yawar Mushtaq',
    description: 'React Developer',
    interests: ['Web Development', 'Data Science', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
  },
  {
    name: 'Jawad Shakeel',
    description: 'PHP Developer',
    interests: ['Web Development', 'Data Science', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
  },
  {
    name: 'Suhail Bashir',
    description: 'PHP Developer',
    interests: ['Web Development', 'Data Science', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
  },
];

function App() {
  return (
    <div style={styles.container}>
      {users.map((user) => (
        <BusinessCard key={user.name} {...user} />
      ))}
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
};
