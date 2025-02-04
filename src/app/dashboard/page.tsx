import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  LuLibraryBig,
  LuHouse,
  LuBook,
  LuBookUp,
  LuClockArrowDown,
} from "react-icons/lu";

const page = () => {
  return (
    <header className="flex items-center shadow-md p-6">
      <div className="flex items-center">
        {" "}
        <LuLibraryBig className="w-14 h-14 text-blue-500" />
        <h1 className="text-4xl font-display font-bold text-gray-800">LIB+</h1>
      </div>

      <nav className="flex items-center ml-auto">
        {" "}
        <Menubar className="border-none shadow-none font-sans text-gray-500">
          <MenubarMenu>
            <MenubarTrigger className="p-3 hover:">
              {" "}
              <LuHouse className="size-5 mr-2" />
              Página Inicial
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="p-3">
              {" "}
              <LuBook className="size-5 mr-2" />
              Livros
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="p-3">
              {" "}
              <LuBookUp className="size-5 mr-2" />
              Empréstimos
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="p-3">
              {" "}
              <LuClockArrowDown className="size-5 mr-2" />
              Histórico
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Avatar>
          <AvatarImage
            className="text-end"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

export default page;
