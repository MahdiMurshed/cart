import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark } from "lucide-react";

type Props = {
  id: string;
  name: string;
  image?: string;
};
export function DataCard({
  id,
  name,
  image = "https://imgs.search.brave.com/CQ28IYxDlWFCPFVCPH_GfgjCzcnsQ1u1GrLkCLI8b-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pZGVh/cm9ja2V0YW5pbWF0/aW9uLmNvbS9hcHAv/dXBsb2Fkcy8yMDIz/LzA1L0ZvdW5kZXJz/VGh1bWJuYWlsLWVk/aXRlZC5wbmc",
}: Props) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0 pb-2">
        <img src={image} alt={name} className="h-[250px]" />
      </CardHeader>
      <CardFooter className="flex justify-between">
        <CardTitle>{name}</CardTitle>
        <Button variant="outline">
          <Bookmark size={24} />
        </Button>
      </CardFooter>
    </Card>
  );
}
