import * as ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function Portal({ children }: Props) {
  const destination = document.getElementById("modal");
  const portal = ReactDOM.createPortal(children, destination);

  return portal;
}
