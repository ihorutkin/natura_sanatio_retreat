import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function scrollToSection(sectionId){
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export function getPageHash(){
    return window.location.hash
}

export function hide(path){
    if (getPageHash() === path){
        return 'hide'
    }
    return 'menu_item'
}
