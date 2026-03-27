import CampaignList from "../../src/components/CampaignList";

export default function Dashboard() {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-6 rounded-2xl shadow-lg bg-white text-center">
        <h1 className="text-2xl font-bold text-black">
          Dashboard - Logged In ✅
        </h1>
      </div>

      {/* 👇 Now render campaigns properly */}
      <CampaignList />
    </div>
  );
}
