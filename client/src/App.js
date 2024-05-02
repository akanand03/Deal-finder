import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar component
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";
import Footer from "./components/footer/footer";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <GoogleOAuthProvider clientId="754233106475-fujoh8222qndv0euf5or047rjedtvovh.apps.googleusercontent.com">
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "120vh", // Increased page size
          }}
        >
          {" "}
          {/* Flexbox container */}
          <Navbar /> {/* Navbar component */}
          <div style={{ flex: 1, marginTop: "20px" }}>
            {" "}
            {/* Flexbox item to grow and fill remaining space */}
            <Container maxWidth="xl" style={{ marginBottom: "60px" }}>
              {" "}
              {/* Container for main content */}
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => <Redirect to="/posts" />}
                />
                <Route path="/posts" exact component={Home} />
                <Route path="/posts/search" exact component={Home} />
                <Route path="/posts/:id" exact component={PostDetails} />
                <Route
                  path={["/creators/:name", "/tags/:name"]}
                  component={CreatorOrTag}
                />
                <Route
                  path="/auth"
                  exact
                  component={() =>
                    !user ? <Auth /> : <Redirect to="/posts" />
                  }
                />
              </Switch>
            </Container>
          </div>
          <Footer /> {/* Footer component */}
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
