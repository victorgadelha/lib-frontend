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

import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, digite um e-mail válido." }),
  password: z.string().min(8).max(50),
});

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
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
    router.push("/books");
  }

  return (
    <div className="flex flex-col justify-center w-96 h-96">
      <div className="flex justify-center items-center mb-3">
        {" "}
        <LuLibraryBig className="w-14 h-14 text-blue-500" />
        <h1 className="ml-2 text-4xl font-display font-bold text-gray-800 ">
          LIB+
        </h1>{" "}
      </div>
      <p className="font-sans font-normal mb-5 text-gray-500 text-center">
        Sistema de gerenciamento de biblioteca
      </p>

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
                    <Input
                      className="pl-9 pt-6 pb-6"
                      type="email"
                      placeholder="Digite o seu e-mail"
                      {...field}
                    />
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
                      className="pl-9 pt-6 pb-6"
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
          <Button
            className="mt-4 mb-4 w-full p-6 bg-blue-500 hover:bg-blue-800 transition duration-400 ease-in-out "
            type="submit"
          >
            LOGIN
          </Button>
          <p className="font-sans font-normal mb-5 text-gray-500 text-center">
            Todos os direitos reservados
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
