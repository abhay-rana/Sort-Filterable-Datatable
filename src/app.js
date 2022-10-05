import React from "react";

import ModalProvider from "./provider/portal-provider";
import Routes from "./routes/routes";

import ErrorBoundary from "./screen/error-boundary";

const App = () => {
	return (
		<ModalProvider>
			<ErrorBoundary>
				<Routes />
			</ErrorBoundary>
		</ModalProvider>
	);
};

export default App;
