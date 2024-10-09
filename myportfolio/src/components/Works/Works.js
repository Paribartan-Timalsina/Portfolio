import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import "./works.css";
import image1 from '../../assets/1.jpeg';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';
const componentFiles = [
  "Python",
  "ReactLogo",
  "Tensorflow",
  "Blockchain",
  "Flutter",
  "JavaScript",
  "MySQL",
  "NumPy",
  "Pandas",  
  "Solidity",
  "C",
  "Cpp"


  // Add all other component filenames here
];

const images = [image1, image2, image3, image4, image5, image6, image7, image8];
const loadComponent = async (componentName) => {
  const module = await import(`../../assets/jsxfiles/${componentName}.jsx`);
  return module.default;
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const [components, setComponents] = React.useState([]);
  const [titles, setTitles] = useState([]);
  React.useEffect(() => {
    const loadComponents = async () => {
      const loadedComponents = await Promise.all(
        componentFiles.map((file) => loadComponent(file))
      );
      setComponents(loadedComponents.filter(component => component !== null));

      const loadedTitles = loadedComponents.map((Component) => {
        if (!Component) return null;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = renderToString(<Component />);
        const titleElement = tempDiv.querySelector('title');
        return titleElement ? titleElement.textContent : 'Unknown';
      });
      setTitles(loadedTitles);
    };

    loadComponents();
  }, []);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const componentsSliced = showAll ? components : components.slice(0, 6);

  return (
    <section id="portfoliosections">
      <h2 className="portfoliotitle">Portfolio</h2>
      <span className="worksDesc">These are the tools and technologies I am familiar with.I have a great understading of these all technologies</span>
      <div className="worksImgs">
      {componentsSliced.map((Component, index) => (
        <div className="worksImgWrapper">
        <Component key={index} />
        <h2>{titles[index]}</h2>
        </div>
      ))}
      </div>
      {images.length > 6 && (
        <button className="worksBtn" onClick={toggleShowAll}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </section>
  );
};

export default Works;
