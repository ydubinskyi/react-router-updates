import { Route, Routes, Link } from 'react-router-dom';

import { Button } from '@react-router-updates/ui/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@react-router-updates/ui/components/ui/tabs';
export function App() {
  return (
    <div>
      <div className="flex max-w-md mx-auto">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p>Account content</p>
            <Button className="w-auto"> Test button</Button>
          </TabsContent>
          <TabsContent value="password">
            <p>Password content</p>
            <Button className="w-auto"> Test button</Button>
          </TabsContent>
        </Tabs>
      </div>
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
