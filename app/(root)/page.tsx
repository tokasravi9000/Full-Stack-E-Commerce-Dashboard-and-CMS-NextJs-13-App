import { UserButton } from "@clerk/nextjs";
const SetupPage = () => {
  return (
    <>
        <div className="p-4">
            <h1>Hello Worlds!</h1>
            <p>This is protected route!</p>  
            <UserButton afterSignOutUrl="/" />          
        </div>
    </>
  )
}

export default SetupPage;
