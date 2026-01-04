// accept children as a prop and children is of type React.ReactNode

import Header from "@/components/Header";

//only job of a react node is to accept a react component as a child and render it
const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className = "min-h-screen text-gray-400">
        <Header/>
        {/* Header Component - I want this to appear in everypage with (root route group) */} 
        <div className = "container py-10">
            {children}
        </div>
    </main>
  );
};

export default Layout;