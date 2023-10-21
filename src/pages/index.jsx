import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { HeaderHome } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <HeaderHome />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const rolloutNavElement = document.querySelector('.rollout-nav');
const navBtnElement = document.querySelector('.nav-btn');

const showMenu = () => {
  rolloutNavElement.classList.toggle('nav-closed');
};

navBtnElement.addEventListener('click', showMenu);
rolloutNavElement.addEventListener('click', showMenu);
