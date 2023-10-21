import { Button } from "@/components/ui/button";

export default function CheckKillPort() {
  const handleDownload = () => {
    // 创建一个新的隐藏的下载链接
    const link = document.createElement("a");
    link.href = "/scripts/Check&Kill_PORTs.applescript"; // 文件的路径
    link.download = "Check&Kill_PORTs.applescript"; // 提议的文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col justify-evenly items-center w-full h-full">
      <h1 className="font-bold text-5xl antialiased italic">
        Check and Kill Opening Ports
      </h1>
      <video width="960" height="720" controls>
        <source src="/videos/check_kill_port.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Button variant="outline" size="lg" onClick={handleDownload}>
        download script
      </Button>
    </div>
  );
}
