import React, { useState } from 'react';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Dashboard</h2>

      <div style={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      <ul style={{ 
        ...styles.navList, 
        ...(menuOpen ? styles.navListMobileOpen : styles.navListMobileClosed) 
      }}>
        <li style={styles.navItem}><a href="#account" style={styles.link}>Account</a></li>
        <li style={styles.navItem}><a href="#payments" style={styles.link}>Payments</a></li>
        <li style={styles.navItem}><a href="#employees" style={styles.link}>Employees</a></li>
        <li style={styles.navItem}><a href="#analyst" style={styles.link}>Analyst</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    flexWrap: 'wrap',
  },
  logo: {
    margin: 0,
  },
  hamburger: {
    display: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#fff',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navListMobileOpen: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '1rem',
  },
  navListMobileClosed: {
    display: 'none',
  },
  navItem: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
  },
};

// Media query using JS for hamburger visibility
if (typeof window !== 'undefined') {
  const updateStyles = () => {
    if (window.innerWidth <= 768) {
      styles.navList.display = 'none';
      styles.hamburger.display = 'block';
    } else {
      styles.navList.display = 'flex';
      styles.hamburger.display = 'none';
    }
  }

  window.addEventListener('resize', updateStyles);
  updateStyles();
}

export default NavigationBar;
