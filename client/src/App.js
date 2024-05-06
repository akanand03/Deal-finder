import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NotificationProvider } from "./context/AuthContext"; // Import the NotificationProvider
import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import NotificationDisplay from "./components/notifications/notificationdisplay"; // Make sure the path is correct
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";
import Footer from "./components/footer/footer";
import OrderSummary from "./components/OrdersSummary/summary";
import AdminPurchases from "./components/adminpurchase/notification";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <GoogleOAuthProvider clientId="your-client-id">
      <BrowserRouter>
        <NotificationProvider>
          {" "}
          {/* Wrap the entire Router with NotificationProvider */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Container
              maxWidth="xl"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
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
                <Route
                  path="/order-summary/:paymentId"
                  exact
                  component={OrderSummary}
                />
                <Route
                  path="/purchases/admin/:adminId"
                  component={AdminPurchases}
                />
              </Switch>
            </Container>
            <Footer style={{ marginTop: "20px" }} />
            <NotificationDisplay />{" "}
            {/* Optionally place it here or anywhere suitable */}
          </div>
        </NotificationProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
