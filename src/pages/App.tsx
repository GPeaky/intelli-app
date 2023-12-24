import { createSignal } from "solid-js";
import TitleBar from "../components/Titlebar";

function Home() {
    const [status, setStatus] = createSignal<boolean>(false);

    return (
        <div class="inset-0">
            <TitleBar />

            <div class="bg-neutral-700 h-screen w-full overflow-hidden">
                <div class="ml-2 mt-5">
                    <h1 class="text-4xl font-bold text-neutral-200">Intelli App</h1>
                    <h1 class="text-xl mt-1 font-medium text-neutral-300"> Current Status: {(status() ? "Active" : "Off")} </h1>

                    <button class="bg-teal-600 text-neutral-200 px-2 py-1 rounded-sm mt-2" onClick={() => console.log("TEST")}>Initialize</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
