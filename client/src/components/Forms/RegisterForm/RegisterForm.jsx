"use client";
import { useState } from "react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/validations/authSchema";
import {
  Text,
  Button,
  Spinner,
  Input,
  Label,
  FormContainer,
} from "@/components/ui";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/users";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({ resolver: zodResolver(RegisterSchema) });

  const handleInputChange = async (field) => {
    await trigger(field);
  };

  const onSubmit = async ({ name, surname, email, password }) => {
    setIsLoading(true);
    try {
      const res = await registerUser({ name, surname, email, password });
      console.log(res);
      reset();
      toast.success("Registro exitoso, Ingresando al sistema...");
      setIsLoading(false);
      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          `Ocurrió un error al ingresar al sistema:\n ${error.message}`,
        );
      } else {
        toast.error("Ocurrió un error al ingresar al sistema");
      }
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <FormContainer className="h-[47.6875rem] w-[40.375rem] pt-[3.25rem] text-black">
      <Text variant="formTitle" className="text-center">
        EMPRESA
      </Text>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3 flex flex-col">
          <Label className="hidden" id="name" label="Nombre" />
          <Input
            id="name"
            type="text"
            {...register("name")}
            onBlur={() => handleInputChange("name")}
            placeholder="Nombre"
            isError={!!errors?.name}
            aria-invalid={errors?.name}
            aria-describedby={errors?.name ? `username-error` : undefined}
          />
          {errors?.name && (
            <span
              id={`username-error`}
              className="ml-3 mt-2 font-bold text-red-600"
            >
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <Label className="hidden" id="surname" label="Apellido" />
          <Input
            id="surname"
            type="text"
            {...register("surname")}
            onBlur={() => handleInputChange("surname")}
            placeholder="Apellido"
            isError={!!errors?.surname}
            aria-invalid={errors?.surname}
            aria-describedby={errors?.surname ? `username-error` : undefined}
          />
          {errors?.surname && (
            <span
              id={`username-error`}
              className="ml-3 mt-2 font-bold text-red-600"
            >
              {errors?.surname?.message}
            </span>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <Label className="hidden" id="email" label="Correo Electrónico" />
          <Input
            id="email"
            type="text"
            {...register("email")}
            onBlur={() => handleInputChange("email")}
            placeholder="Correo electrónico"
            isError={!!errors?.email}
            aria-invalid={errors?.email}
            aria-describedby={errors?.email ? `email-error` : undefined}
          />
          {errors?.email && (
            <span
              id={`email-error`}
              className="ml-3 mt-2 font-bold text-red-600"
            >
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <Label className="hidden" id="password" label="Contraseña" />
          <Input
            id="password"
            type="password"
            {...register("password")}
            onBlur={() => handleInputChange("password")}
            placeholder="Contraseña"
            isError={!!errors?.password}
            aria-invalid={errors?.password}
            aria-describedby={errors?.password ? `password-error` : undefined}
          />
          {errors?.password && (
            <span
              id={`password-error`}
              className="ml-3 mt-2 font-bold text-red-600"
            >
              {errors?.password?.message}
            </span>
          )}
        </div>
        <div className="mb-9 flex flex-col">
          <Label
            className="hidden"
            id="confirmPassword"
            label="Confirme Contraseña"
          />
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            onBlur={() => handleInputChange("confirmPassword")}
            placeholder="Repetir contraseña"
            isError={!!errors?.confirmPassword}
            aria-invalid={errors?.confirmPassword}
            aria-describedby={
              errors?.confirmPassword ? `confirmPassword-error` : undefined
            }
          />
          {errors?.confirmPassword && (
            <span
              id={`confirmPassword-error`}
              className="ml-3 mt-2 font-bold text-red-600"
            >
              {errors?.confirmPassword?.message}
            </span>
          )}
        </div>
        <Button type="submit" variant="authSubmit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Crear cuenta"}
        </Button>
      </form>
      <p className="mb-16 py-6 text-center text-xl text-black">
        ¿Ya tienes una cuenta?{" "}
        <Link
          href="/login"
          className="ml-3 mt-2 font-semibold text-blue-500 hover:text-blue-300"
        >
          Inicia Sesión
        </Link>{" "}
      </p>
    </FormContainer>
  );
};
