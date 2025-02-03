"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LuLibraryBig } from "react-icons/lu";

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, digite um e-mail válido." }),
  password: z.string().min(8).max(50),
});

const UserForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center w-80 h-80">
      <div className="flex justify-center items-center">
        <LuLibraryBig className="w-14 h-14 text-blue-500" />
        <h1 className="ml-2 text-4xl font-bold">LIB+</h1>
      </div>

      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="outline-none p-6"
                    placeholder="Digite o seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    className="outline-none p-6"
                    type="password"
                    placeholder="Digite a sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 w-full p-6" type="submit">
            LOGIN
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserForm;
