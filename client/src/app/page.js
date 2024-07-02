import { Text } from "../components/ui/Text/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Text variant="title">Este es un titulo</Text>
      <Text variant="base">Hello World</Text>
    </main>
  );
}
