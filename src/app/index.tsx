import Home from "pages/home";
import { withProviders } from "./providers";
import AppStyles from "./styles";

const App = () => (
    <div>
        <Home/>
        <AppStyles/>
    </div>
)

export default withProviders(App);