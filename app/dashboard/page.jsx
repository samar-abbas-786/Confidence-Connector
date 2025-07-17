import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Access Denied</div>;

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Role: {session.user.role}</p>
      {session.user.role === "doctor" ? (
        <p>Doctor-only content here</p>
      ) : (
        <p>Patient-only content here</p>
      )}
    </div>
  );
}
