import { AuthContextProvider } from "../components/auth-context/auth-context-provider";
import { Layout } from "../components/layout/Layout";
import { ProviderWrapper } from "../components/provider-wrapper/provider-wrapper";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider";

export const metadata = {
  title: "Next js app",
  description: "restaurants app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <ProviderWrapper>
          <ThemeContextProvider>
            <AuthContextProvider>
              <Layout>{children}</Layout>
            </AuthContextProvider>
          </ThemeContextProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
