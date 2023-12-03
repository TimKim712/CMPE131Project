import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import {AboutUsButton} from './components/AboutUsButton.js';
import {ContactUsButton} from './components/ContactUsButton.js';
import AboutUs from './components/pages/AboutUs.js';
import aboutUsContent from './components/AboutUsContent';
//import testPath from './components/pages/AboutUs.js';

//Testing for general website
test('Website Starts Up', () => {
  render(<App />);
  expect(screen.getByText('Discover the Charm')).toBeInTheDocument();
});

test('NavBar appears in all sections of website', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('NavBar links all work as intended',() =>{
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText('Home'));
  expect(screen.getByText('Home')).toBeInTheDocument();

  
  fireEvent.click(screen.getByText('Contacts'));
  expect(screen.getByText('Contacts')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Services'));
  expect(screen.getByText('Services')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Sign Up'));
  expect(screen.getByText('Sign Up')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Sign In'));
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});

test('Navbar snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Footer appears in all sections of website', () =>{
  render(<App />);
  expect(screen.getByText('Join the City newsletter to receive latest news and updates!')).toBeInTheDocument();
});


//Testing for home page
test('Home page components load', () => {
  const component = render(<App/>);
  const homeComponents = component.getByText("Check out these Events and Updates!");
  expect(homeComponents).toBeInTheDocument();
});


test('renders AboutUsButton with correct text', () => {
  render(
    <MemoryRouter>
      <AboutUsButton />
    </MemoryRouter>
  );

  expect(screen.getByText('About Us')).toBeInTheDocument();
});

test('navigates to /about-us when button is clicked', () => { //fix
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Route path='/about-us'>
        <AboutUsButton />
      </Route>
    </Router>
  );

  fireEvent.click(screen.getByText('About Us'));

  // Check that the page navigation occurred
  expect(history.location.pathname).toBe('./components/pages/AboutUs.js');
});

test('renders ContactUsButton with correct text', () => {
  render(
    <MemoryRouter>
      <ContactUsButton />
    </MemoryRouter>
  );

  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});

test('navigates to /contact-us when button is clicked', () => { //fix
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Route path='/contacts'>
        <AboutUsButton />
      </Route>
    </Router>
  );

  fireEvent.click(screen.getByText('Contact Us'));

  // Check that the page navigation occurred
  expect(history.location.pathname).toBe('/contacts');
});

// test('Check if cards generate correctly', () =>{

// });


//test About Us Section

test('About Us page opens when button for it is pressed', () =>{
  render(
    <MemoryRouter>
      <AboutUsButton />
    </MemoryRouter>
  );
  expect(screen.queryByText('Information about the city and what it has to offer!')).toBeNull();
  //About Us button is pressed
  fireEvent.click(screen.getByText('About Us'));
  expect(screen.getByText('About Us')).toBeInTheDocument();
});

test('About Us history, economy, and local government sections load properly', ()=>{
  render(
    <MemoryRouter>
      <AboutUs/>
    </MemoryRouter>
  );
  expect(screen.getByText('City History')).toBeInTheDocument();
  expect(screen.getByText('Economy')).toBeInTheDocument();
  expect(screen.getByText('Local Government')).toBeInTheDocument();
});

test('Home page snapshot', () => {
  const component = renderer.create(
    <Router>
      <aboutUsContent />
    </Router>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//test Contact Us Section

test('Contact Us page opens when button for it is pressed', () =>{
  render(
    <MemoryRouter>
      <ContactUsButton />
    </MemoryRouter>
  );
  expect(screen.queryByText('Information about the city and what it has to offer!')).toBeNull();
  //About Us button is pressed
  fireEvent.click(screen.getByText('Contact Us'));
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});
