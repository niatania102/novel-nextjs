import TailwindEditor from "./components/Editor";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5 bg-gray-400">
      <p>Novel Tania</p>
      <div className="flex w-full max-w-screen-lg items-center gap-2 px-4 sm:mb-[calc(20vh)]">
        <Dialog>
          <DialogTrigger asChild>
          </DialogTrigger>
          <DialogContent className="flex max-w-3xl h-[calc(100vh-24px)]">
            <ScrollArea className="max-h-screen">
              <TailwindEditor />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>

      <TailwindEditor />
    </div>
  );
}
