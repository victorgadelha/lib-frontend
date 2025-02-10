"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Book } from "./books";
import { access } from "fs";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Título
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Categoria
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Visualizar Detalhes</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[40%]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold tracking-tight ">
                    {book.title}
                  </DialogTitle>
                  <DialogDescription asChild={true}>
                    <div className="flex justify-center flex-col">
                      {" "}
                      <span className="text-xl font-semibold">
                        Sobre o livro:
                      </span>{" "}
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {" "}
                        {book.description}
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex justify-center">
                  <div className="flex justify-end flex-col">
                    {" "}
                    <h2 className="text-sm text-muted-foreground font-medium">
                      ISBN: {book.isbn}
                    </h2>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
