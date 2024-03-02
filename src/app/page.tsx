import { useState } from 'react';
import Detail from "@/components/Detail";
import SidebarChecklist from "@/components/SidebarChecklist";
import SidebarParts from "@/components/SidebarParts";


export default function Home() {

  const [sidebarHidden, setSidebarHidden] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-5 lg:grid-cols-7">
      {!sidebarHidden && <SidebarParts />}
      <Detail />
      <SidebarChecklist />
      <button onClick={() => setSidebarHidden(!sidebarHidden)}>Toggle Sidebar</button>
    </div>
  );
}
