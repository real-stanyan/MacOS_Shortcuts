import CheckKillPort from "./script_pages/check_kill_port";
import FrontendFrameworksInitialize from "./script_pages/frontend_frameworks_initialize";
import Home from "./script_pages/home";

import { ScrollArea } from "@/components/ui/scroll-area";

export function Switcher({ content }: { content: string }) {
  console.log(content);
  return (
    <>
      {content === "Home" && <Home />}
      {content === "Check&Kill Port Content" && <CheckKillPort />}
      {content === "Front-end Frameworks initialize" && (
        <FrontendFrameworksInitialize />
      )}
    </>
  );
}
