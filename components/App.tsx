import React from "react";

const App = () => {
  return (
    <div className="wrapper">
      <section className="app-section">
        <h2>Get our App</h2>
        <p>You can use our App for better experience on smartphones</p>
        <div className="app-buttons">
          <div className="app-btn">
            <img src="images/logo-app-store.svg" alt="" />
            <span>App Store</span>
          </div>

          <div className="app-btn">
            <img src="images/logo-google-play.svg" alt="" />
            <span>Google Play</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
