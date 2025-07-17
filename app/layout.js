import './globals.css';
import Provider from './components/session-provider';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Interv2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
