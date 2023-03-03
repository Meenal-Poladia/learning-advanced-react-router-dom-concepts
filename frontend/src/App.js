import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Events, {loader as eventLoader} from "./pages/Events";
import EventDetail, {deleteEventAction, loader} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import EventsRoots from "./pages/EventsRoots";
import Error from "./pages/Error";
import {action as manipulativeEventForm} from "./components/EventForm"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error/>,
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          index: true,
          element: <Home/>,
        },
        {
          path: "events",
          element: <EventsRoots/>,
          children: [
            {
              path: "",
              index: true,
              element: <Events/>,
              loader: eventLoader
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: loader,
              children: [
                {
                  index: true,
                  element: <EventDetail/>,
                  action: deleteEventAction
                },
                {
                  path: "edit",
                  element: <EditEvent/>,
                  action: manipulativeEventForm
                }
              ]
            },
            {
              path: "new",
              element: <NewEvent/>,
              action: manipulativeEventForm
            },
          ]
        },

      ]
    },
  ]);

  return (
      <RouterProvider router={router}/>
  );
}

export default App;