import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "/src/styles/theme.config";
import "/src/styles/globals.css";
dayjs.extend(relativeTime);

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
