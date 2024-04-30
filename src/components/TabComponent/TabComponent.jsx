import React, { useState } from 'react';

const TabComponent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabComponent">
      <ul className="nav navTabs">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <li className="navItem" key={index}>
                <button
                  className={`navLink ${activeTab === index ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {child.props.tabLabel}
                </button>
              </li>
            );
          }
        })}
      </ul>
      <div className="tabContent">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <div
                key={index}
                className={`tabPane ${activeTab === index ? 'activeContent' : ''}`}
              >
                {activeTab === index && child.props.children}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TabComponent;
