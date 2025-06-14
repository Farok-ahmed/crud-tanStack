import { useState } from "react";
import PostAdd from "./components/PostAdd";
import PostEdit from "./components/PostEdit";
import PostLists from "./components/PostLists";

const App = () => {
  const [edite, setEdite] = useState(null);
  console.log(edite);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-center">TanStack Crud Project</h1>
      <div className="flex justify-between gap-4">
        <PostLists onEdit={setEdite} />
        <PostAdd />
        <PostEdit post={edite} />
      </div>
    </div>
  );
};

export default App;
