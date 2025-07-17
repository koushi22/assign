import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Access Denied</h1>
        <p>Please <a href="/login" style={{ color: "blue" }}>login with GitHub</a> to continue.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Home Page</h1>
      <p>This is a protected page. You are logged in.</p>
    </div>
  );
}
