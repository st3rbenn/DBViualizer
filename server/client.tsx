import React from 'react';
import { render } from 'react-dom';
import Index from '../src/index'; // Importez votre composant principal ici

const rootElement = document.getElementById('root');

const renderApp = () => {
  render(<Index />, rootElement); // Utilisez le composant principal directement
};

renderApp();

if (module.hot) {
  module.hot.accept('../src/App', () => {
    // Mettez à jour le chemin d'importation
    renderApp();
  });
}
