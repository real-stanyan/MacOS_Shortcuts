import CheckKillPort from "./script_pages/check_kill_port";
import FrontendFrameworksInitialize from "./script_pages/frontend_frameworks_initialize";
import Home from "./script_pages/home";

export function Switcher({ content }: { content: string }) {
  console.log(content);
  return (
    <div className="flex-grow p-10">
      {content === "Home" && <Home />}
      {content === "Check&Kill Port Content" && <CheckKillPort />}
      {content === "Front-end Frameworks initialize" && (
        <FrontendFrameworksInitialize />
      )}
    </div>
  );
}
