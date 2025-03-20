import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  const renderPage = () => {
    if (currentPage === 'aboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header className="bg-secondary text-white mb-3">
        <div className="container-fluid">
          <h1>Andrew's Portfolio</h1>
        </div>
      </header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <footer>
        <a href='www.linkedin.com/in/andrew-cerna'>Linkin</a>
        <a href='https://github.com/amcerna'>GitHub</a>
      </footer>
    </div>
  );
}
