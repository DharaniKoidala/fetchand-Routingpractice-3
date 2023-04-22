import UserInfo from '../UserInfo'

import './index.css'
import BlogsList from '../BlogList'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <UserInfo />
    <BlogsList BlogsList={BlogsList} />
  </div>
)

export default Home
