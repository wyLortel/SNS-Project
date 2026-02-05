import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutaions";

export default function TodoEditor() {
  const { mutate, isPending } = useCreateTodoMutation();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "" || isPending) return;

    mutate(content, {
      onSuccess: () => setContent(""),
    });
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요.."
        onKeyDown={(e) => e.key === "Enter" && handleAddClick()}
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        {isPending ? "추가 중..." : "추가"}
      </Button>
    </div>
  );
}
