import Button from "@mui/material/Button";
import { IonButton } from "@ionic/react";
import { styled } from "@mui/material/styles"; // I believe this is @emotion/styled included with mui
import { theme } from "./index";

function App() {
  return (
    <div className="App">
      <button>Button Raw</button>
      <hr />
      Above this line are HTML elements <br />
      Below this line are custom components
      <hr />
      <ButtonComponent text="Custom Component" />
      <StyledButton>Theme Styled</StyledButton>
      <hr />
      Above this line are custom components <br />
      Below this line are MUI components
      <hr />
      <Button>MUI Base</Button>
      <Button variant="contained" color="primary">
        MUI Primary
      </Button>
      <Button variant="contained" color="warning">
        MUI Overridden
      </Button>
      <SimpleStyledButton>Simple Styled</SimpleStyledButton>
      <ThemedButton variant="contained" color="warning">
        Themed Button
      </ThemedButton>
      <hr />
      Above this line are MUI components <br />
      Below this line are Ionic components WITHOUT Ionic theming
      <hr />
      <IonButton>Ion Base</IonButton>
      <IonButton color="primary">Ion Primary</IonButton>
      <br />
      <StyledIonButton>Styled Ion Button</StyledIonButton>
    </div>
  );
}

// HTML element as component with no style (ignores theme)
function ButtonComponent(props) {
  return <button>{props.text}</button>;
}

// MUI component with style override
const SimpleStyledButton = styled(Button)({
  color: "red",
  border: "1px solid black",
  height: "30px",
});

// HTML element as component with style
const StyledButton = styled("button")(({ theme }) => ({
  color: theme.palette.primary.main,
  ":hover": { color: theme.palette.warning.main },
  height: "30px",
  width: "130px",
}));

// HTML element as component with styles defined in the theme
const ThemedButton = styled("button", {
  name: "ThemedButton",
  slot: "Root",
})();

const StyledIonButton = styled(IonButton)`
  &::part(native) {
    background-color: ${theme.palette.secondary.light};
  }
`;

export default App;
