/* @refresh reload */
import "./styles.css";
import IntelliApp from "./IntelliApp";
import { render } from "solid-js/web";

render(() => <IntelliApp />, document.getElementById("root") as HTMLElement);