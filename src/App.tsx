import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './Shop/index';
import ResultsPage from './Shop/ResultsPage';
import FeedbackForm from './Shop/components/feedback';
import ContactUs from './Shop/components/contact';
import Roadmap from './Shop/components/roadmap';
import PrivacyPolicy from './Shop/components/privacy';
import Terms from './Shop/components/terms';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/feedback" component={FeedbackForm} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
      </Switch>
    </Router>
  );
}

export default App;
