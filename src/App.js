import { Grid } from "@mui/material";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="app">
      <h1>주소록</h1>
      <SearchBox />
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
