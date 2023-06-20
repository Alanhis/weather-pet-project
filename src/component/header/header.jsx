import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
export function HeaderComponent(props) {
  return (
    <header className="header">
      <p className="main_text">Погода</p>
      <AddressSuggestions
        token={import.meta.env.VITE_DADATA_API}
        value={props.value}
        onChange={props.setValue}
        filterFromBound="city"
        filterToBound="city"
      />
    </header>
  );
}
