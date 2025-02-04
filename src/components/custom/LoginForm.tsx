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
import { LuLibraryBig, LuMail, LuLock } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, digite um e-mail válido." }),
  password: z.string().min(8).max(50),
});

const LoginForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Login efetuado com sucesso!",
      description: "Você será redirecionado para a página principal.",
    });
  }

  return (
    <div className="flex flex-col justify-center w-80 h-80">
      <div className="flex justify-center items-center">
        <LuLibraryBig className="w-14 h-14 text-blue-500" />
        <h1 className="ml-2 text-4xl font-display font-bold">LIB+</h1>
      </div>

      <Form {...form}>
        <form
          className="w-full font-sans"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <LuMail className="absolute size-5 left-3 text-gray-500" />
                    <Input className="pl-9" placeholder="Digite seu e-mail" />
                  </div>
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
                  <div className="relative flex items-center">
                    <LuLock className="absolute size-5 left-3 text-gray-500" />
                    <Input
                      className="pl-9"
                      type="password"
                      placeholder="Digite a sua senha"
                      {...field}
                    />
                  </div>
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

export default LoginForm;
